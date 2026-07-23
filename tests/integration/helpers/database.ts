import { prisma } from "../../../src/lib/prisma.js";

export async function resetDatabase() {
	await prisma.$transaction([
		prisma.session.deleteMany(),
		prisma.account.deleteMany(),
		prisma.verification.deleteMany(),
		prisma.user.deleteMany(),
	]);
}
