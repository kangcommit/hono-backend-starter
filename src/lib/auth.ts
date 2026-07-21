import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { admin, openAPI } from "better-auth/plugins";
import { env } from "../config/env.js";
import { prisma } from "./prisma.js";

export const auth = betterAuth({
	secret: env.BETTER_AUTH_SECRET,
	database: prismaAdapter(prisma, {
		provider: "postgresql",
	}),
	trustedOrigins: [env.CLIENT_URL],
	emailAndPassword: {
		enabled: true,
	},
	plugins: [openAPI(), admin()],
});

export type AuthType = {
	user: typeof auth.$Infer.Session.user | null;
	session: typeof auth.$Infer.Session.session | null;
};
