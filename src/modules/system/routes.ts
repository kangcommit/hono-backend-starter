import { createRoute } from "@hono/zod-openapi";
import { jsonResponse } from "../../openapi/responses.js";
import { OPENAPI_TAGS } from "../../openapi/tags.js";
import * as schema from "./schema.js";

export const rootRoute = createRoute({
	method: "get",
	path: "/",
	tags: [OPENAPI_TAGS.SYSTEM],
	summary: "Application information",
	description: "Returns basic information about the running API.",
	responses: {
		200: jsonResponse("Application information", schema.RootResponseSchema),
	},
});

export const healthRoute = createRoute({
	method: "get",
	path: "/health",
	tags: [OPENAPI_TAGS.SYSTEM],
	summary: "Health check",
	description: "Returns the application liveness status.",
	responses: {
		200: jsonResponse("Application is healthy", schema.HealthResponseSchema),
	},
});

export const readyRoute = createRoute({
	method: "get",
	path: "/ready",
	tags: [OPENAPI_TAGS.SYSTEM],
	summary: "Readiness check",
	description: "Returns whether the application is ready to serve requests.",
	responses: {
		200: jsonResponse("Application is ready", schema.ReadyOkResponseSchema),
		503: jsonResponse(
			"Application is not ready",
			schema.ReadyFailResponseSchema,
		),
	},
});
