import z from "zod";
import { PAGINATION } from "../config/constants.js";

export const SortOrderSchema = z.enum(["asc", "desc"]);

export const ListQuerySchema = z.object({
	page: z.coerce.number().int().min(1).default(1),
	limit: z.coerce
		.number()
		.int()
		.min(1)
		.max(PAGINATION.MAX_LIMIT)
		.default(PAGINATION.DEFAULT_LIMIT),
	sort: z.string().trim().optional(),
	order: SortOrderSchema.default("asc"),
});

export const PaginationMetaSchema = z.object({
	page: z.number(),
	limit: z.number(),
	total: z.number(),
	totalPages: z.number(),
});
