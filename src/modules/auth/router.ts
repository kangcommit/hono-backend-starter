import { Hono } from "hono";
import { auth } from "../../lib/auth.js";

export const authRouter = new Hono().on(["POST", "GET"], "/auth/*", (c) => {
	return auth.handler(c.req.raw);
});
