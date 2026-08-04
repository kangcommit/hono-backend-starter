import { describe, expect, it } from "vitest";
import { AppError } from "../../../src/errors/app-error.js";
import {
	BadRequestError,
	ConflictError,
	ForbiddenError,
	NotFoundError,
	ServiceUnavailableError,
	UnauthorizedError,
	ValidationError,
} from "../../../src/errors/http-errors.js";

describe("HTTP errors", () => {
	it.each([
		[BadRequestError, 400, "Bad request"],
		[UnauthorizedError, 401, "Unauthorized"],
		[ForbiddenError, 403, "Forbidden"],
		[NotFoundError, 404, "Not found"],
		[ConflictError, 409, "Conflict"],
		[ValidationError, 422, "Validation failed"],
		[ServiceUnavailableError, 503, "Service unavailable"],
	] as const)(
		"creates %s with the default status and message",
		(ErrorClass, statusCode, message) => {
			// Act
			const error = new ErrorClass();

			// Assert
			expect(error).toBeInstanceOf(AppError);
			expect(error).toBeInstanceOf(ErrorClass);
			expect(error.name).toBe(ErrorClass.name);
			expect(error.statusCode).toBe(statusCode);
			expect(error.message).toBe(message);
		},
	);

	it("supports custom messages", () => {
		// Act
		const error = new NotFoundError("Post not found");

		// Assert
		expect(error.statusCode).toBe(404);
		expect(error.message).toBe("Post not found");
	});
});
