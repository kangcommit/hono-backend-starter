import { describe, expect, it } from "vitest";
import { getRoles, isAdmin, ROLES } from "../../../src/auth/roles.js";
import { user } from "../../helpers/fixtures/auth.js";

describe("roles", () => {
	it("parses comma-separated roles", () => {
		const result = getRoles({
			...user,
			role: "user, admin",
		});

		expect(result).toEqual([ROLES.USER, ROLES.ADMIN]);
	});

	it("ignores empty role entries", () => {
		const result = getRoles({
			...user,
			role: "user, , admin,",
		});

		expect(result).toEqual([ROLES.USER, ROLES.ADMIN]);
	});

	it("detects admin users", () => {
		const result = isAdmin({
			...user,
			role: "user,admin",
		});

		expect(result).toBe(true);
	});

	it("returns false for non-admin users", () => {
		const result = isAdmin({
			...user,
			role: "user",
		});

		expect(result).toBe(false);
	});

	it("returns false when the user has no roles", () => {
		const result = isAdmin({
			...user,
			role: null,
		});

		expect(result).toBe(false);
	});
});
