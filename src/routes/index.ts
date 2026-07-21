import { OpenAPIHono } from "@hono/zod-openapi";
import { authRouter } from "../modules/auth/router.js";
import { systemRouter } from "../modules/system/router.js";

const routes = new OpenAPIHono();

routes.route("/", systemRouter);
routes.route("/", authRouter);

export default routes;
