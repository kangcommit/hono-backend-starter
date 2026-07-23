import dotenv from "dotenv";
import { afterAll, beforeEach } from "vitest";
import { prisma } from "../../src/lib/prisma.js";
import { resetDatabase } from "./helpers/database.js";

dotenv.config({
	path: ".env.test",
});

beforeEach(async () => {
	await resetDatabase();
});

afterAll(async () => {
	await prisma.$disconnect();
});
