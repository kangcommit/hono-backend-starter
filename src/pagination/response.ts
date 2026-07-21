import { z } from "@hono/zod-openapi";
import { PaginationMetaSchema } from "./schema.js";

export function createPaginatedResponseSchema<T extends z.ZodTypeAny>(
	itemSchema: T,
) {
	return z.object({
		data: z.array(itemSchema),
		meta: PaginationMetaSchema,
	});
}
