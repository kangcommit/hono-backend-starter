import type { ZodType } from "zod";
import { errorResponseSchema } from "./schema.js";

export const jsonResponse = (description: string, schema: ZodType) => ({
	description,
	content: {
		"application/json": {
			schema,
		},
	},
});

export const errorResponse = (description: string) =>
	jsonResponse(description, errorResponseSchema);

export const noContentResponse = {
	description: "No content",
};

export const unauthorizedResponse = {
	401: errorResponse("Unauthorized."),
};

export const forbiddenResponse = {
	403: errorResponse("Forbidden."),
};

export const notFoundResponse = (description: string) => ({
	404: errorResponse(description),
});
