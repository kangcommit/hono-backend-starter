import { OpenAPIHono } from "@hono/zod-openapi";
import { Scalar } from "@scalar/hono-api-reference";
import { API_PREFIX } from "./config/constants.js";
import { corsMiddleware } from "./middleware/cors.js";
import { errorHandler } from "./middleware/error.js";
import { loggerMiddleware } from "./middleware/logger.js";
import { notFound } from "./middleware/not-found.js";
import { requestIdMiddleware } from "./middleware/request-id.js";
import { sessionMiddleware } from "./middleware/session.js";
import { openApiDocument, scalarConfig } from "./openapi/config.js";
import routes from "./routes/index.js";

const app = new OpenAPIHono().basePath(API_PREFIX);

app.use("*", corsMiddleware);

app.use("*", requestIdMiddleware);

app.use("*", sessionMiddleware);

app.use("*", loggerMiddleware);

app.route("/", routes);

app.doc("/openapi.json", openApiDocument);

app.get("/docs", Scalar(scalarConfig));

app.notFound(notFound);

app.onError(errorHandler);

export default app;
