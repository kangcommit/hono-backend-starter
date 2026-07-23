import { describe, expect, it } from "vitest";
import { prisma } from "../../src/lib/prisma.js";

describe("Database connection", () => {
	it("connects successfully", async () => {
		const result = await prisma.$queryRaw<
			Array<{ result: number }>
		>`SELECT 1 as result`;

		expect(result).toEqual([
			{
				result: 1,
			},
		]);
	});
});
