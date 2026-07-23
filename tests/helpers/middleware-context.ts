import { vi } from "vitest";

export function createMiddlewareContext(
	initialValues?: Record<string, unknown>,
) {
	const values = new Map(Object.entries(initialValues ?? {}));

	const c = {
		req: {
			raw: {
				headers: new Headers(),
			},
		},

		set: vi.fn((key: string, value: unknown) => {
			values.set(key, value);
		}),

		get: vi.fn((key: string) => {
			return values.get(key);
		}),
	};

	return {
		c,
		next: vi.fn(),
	};
}
