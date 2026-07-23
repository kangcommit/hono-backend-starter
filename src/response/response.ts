import type { Context } from "hono";
import type { ContentfulStatusCode } from "hono/utils/http-status";
import type { PaginationMeta } from "../pagination/types.js";

export function ok<T>(c: Context, data: T, status: ContentfulStatusCode = 200) {
	return c.json({ data }, status);
}

export function created<T>(c: Context, data: T) {
	return ok(c, data, 201);
}

export function paginated<T>(c: Context, data: T[], meta: PaginationMeta) {
	return c.json({
		data,
		meta,
	});
}

export function noContent(c: Context) {
	return c.body(null, 204);
}
