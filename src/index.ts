import { serve } from "@hono/node-server";
import app from "./app.js";
import { env } from "./config/env.js";
import { logger } from "./lib/logger.js";

serve(
	{
		fetch: app.fetch,
		port: env.PORT,
	},
	() => {
		logger.info(`Server listening on port ${env.PORT}`);
	},
);
