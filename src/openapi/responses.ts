import type { ZodType } from "zod";
import { ErrorResponseSchema } from "./schema.js";

export const response = (description: string, schema: ZodType) => ({
	description,
	content: {
		"application/json": {
			schema,
		},
	},
});

// Successful response helpers
export const okResponse = (description: string, schema: ZodType) => ({
	200: response(description, schema),
});

export const createdResponse = (description: string, schema: ZodType) => ({
	201: response(description, schema),
});

export const noContentResponse = (description = "No content") => ({
	204: { description },
});

// Error response helpers
export const errorResponse = (description: string) =>
	response(description, ErrorResponseSchema);

export const unauthorizedResponse = {
	401: errorResponse("Unauthorized."),
};

export const forbiddenResponse = {
	403: errorResponse("Forbidden."),
};

export const notFoundResponse = (description = "Not found.") => ({
	404: errorResponse(description),
});

export const serviceUnavailableResponse = (
	description = "Service unavailable.",
	schema: ZodType = ErrorResponseSchema,
) => ({
	503: response(description, schema),
});
