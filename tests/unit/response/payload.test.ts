import { describe, expect, it } from "vitest";
import { data, paginated } from "../../../src/response/payload.js";

describe("response payload helpers", () => {
	it("wraps a value in a data object", () => {
		// Act
		const result = data({ id: "post-1", title: "Hello" });

		// Assert
		expect(result).toEqual({
			data: {
				id: "post-1",
				title: "Hello",
			},
		});
	});

	it("wraps a collection with pagination metadata", () => {
		// Arrange
		const meta = {
			page: 2,
			limit: 10,
			total: 25,
			totalPages: 3,
			hasNextPage: true,
			hasPreviousPage: true,
		};

		// Act
		const result = paginated([{ id: "post-1" }], meta);

		// Assert
		expect(result).toEqual({
			data: [{ id: "post-1" }],
			meta,
		});
	});
});
