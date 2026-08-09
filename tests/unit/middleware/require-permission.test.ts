import { describe, expect, it, vi } from "vitest";
import type { AppPermissions } from "../../../src/auth/permissions.js";
import {
	ForbiddenError,
	ServiceUnavailableError,
	UnauthorizedError,
} from "../../../src/errors/http-errors.js";
import { auth } from "../../../src/lib/auth.js";
import { requirePermission } from "../../../src/middleware/require-permission.js";
import { user } from "../../helpers/fixtures/auth.js";
import { createMiddlewareContext } from "../../helpers/middleware-context.js";

vi.mock("../../../src/lib/auth.js", () => ({
	auth: {
		api: {
			userHasPermission: vi.fn(),
		},
	},
}));

const permissions = {
	post: ["create"],
} satisfies AppPermissions;

describe("requirePermission", () => {
	it("calls next when the user has permission", async () => {
		// Arrange
		vi.mocked(auth.api.userHasPermission).mockResolvedValue({
			error: null,
			success: true,
		});

		const { c, next } = createMiddlewareContext({
			user,
		});

		// Act
		await requirePermission(permissions)(c as never, next);

		// Assert
		expect(auth.api.userHasPermission).toHaveBeenCalledWith({
			body: {
				userId: user.id,
				permissions,
			},
		});
		expect(next).toHaveBeenCalledOnce();
	});

	it("throws UnauthorizedError when the user is missing", async () => {
		// Arrange
		const { c, next } = createMiddlewareContext({
			user: null,
		});

		// Act & Assert
		await expect(
			requirePermission(permissions)(c as never, next),
		).rejects.toThrow(UnauthorizedError);

		expect(auth.api.userHasPermission).not.toHaveBeenCalled();
		expect(next).not.toHaveBeenCalled();
	});

	it("throws ForbiddenError when permission is denied", async () => {
		// Arrange
		vi.mocked(auth.api.userHasPermission).mockResolvedValue({
			error: null,
			success: false,
		});

		const { c, next } = createMiddlewareContext({
			user,
		});

		// Act & Assert
		await expect(
			requirePermission(permissions)(c as never, next),
		).rejects.toThrow(ForbiddenError);

		expect(next).not.toHaveBeenCalled();
	});

	it("throws ServiceUnavailableError when permission lookup fails", async () => {
		// Arrange
		vi.mocked(auth.api.userHasPermission).mockRejectedValue(
			new Error("Permission lookup failed"),
		);

		const { c, next } = createMiddlewareContext({
			user,
		});

		// Act & Assert
		await expect(
			requirePermission(permissions)(c as never, next),
		).rejects.toThrow(ServiceUnavailableError);

		expect(next).not.toHaveBeenCalled();
	});
});
