import type { PaginationMeta } from "../pagination/types.js";

interface DataResponse<T> {
	data: T;
}

interface PaginatedResponse<T> {
	data: T[];
	meta: PaginationMeta;
}

export function data<T>(value: T): DataResponse<T> {
	return {
		data: value,
	};
}

export function paginated<T>(
	value: T[],
	meta: PaginationMeta,
): PaginatedResponse<T> {
	return {
		data: value,
		meta,
	};
}
