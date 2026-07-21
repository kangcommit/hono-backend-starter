import z from "zod";

export const errorResponseSchema = z
	.object({
		message: z.string(),
	})
	.openapi("ErrorResponse");
