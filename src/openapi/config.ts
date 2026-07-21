import { API_PREFIX, APP_NAME, APP_VERSION } from "../config/constants.js";

export const openApiDocument = {
	openapi: "3.1.0",
	info: {
		title: APP_NAME,
		version: APP_VERSION,
		description:
			"A production-ready backend template built with Hono, Prisma, and PostgreSQL.",
		contact: {
			name: "Ahmad",
			url: "https://github.com/kangcommit",
			email: "ahmad.codespace@gmail.com",
		},
		license: {
			name: "MIT",
		},
	},
};

export const scalarConfig = {
	pageTitle: "API Documentation",
	sources: [
		{
			title: "API",
			url: `${API_PREFIX}/openapi.json`,
		},
		{
			title: "Auth",
			url: `${API_PREFIX}/auth/open-api/generate-schema`,
		},
	],
};
