import { OpenAPIHono } from "@hono/zod-openapi";
import { getCurrentUser } from "../../auth/current-user.js";
import { createProtectedRouter } from "../../auth/protected-router.js";
import type { AuthType } from "../../lib/auth.js";
import { paginated } from "../../response/payload.js";
import {
	createPostRoute,
	deletePostRoute,
	getPostRoute,
	listPostsRoute,
	updatePostRoute,
} from "./routes.js";
import { postService } from "./service.js";

export const postsRouter = new OpenAPIHono<{ Variables: AuthType }>();
const protectedPostsRouter = createProtectedRouter();

postsRouter.openapi(listPostsRoute, async (c) => {
	const query = c.req.valid("query");

	const posts = await postService.findMany(query);

	return c.json(paginated(posts.data, posts.meta));
});

postsRouter.openapi(getPostRoute, async (c) => {
	const { id } = c.req.valid("param");

	const post = await postService.findById(id);

	return c.json(post);
});

protectedPostsRouter.openapi(createPostRoute, async (c) => {
	const body = c.req.valid("json");

	const user = getCurrentUser(c);

	const post = await postService.create(user.id, body);

	return c.json(post, 201);
});

protectedPostsRouter.openapi(updatePostRoute, async (c) => {
	const { id } = c.req.valid("param");
	const body = c.req.valid("json");

	const user = getCurrentUser(c);

	const post = await postService.update(id, user, body);

	return c.json(post);
});

protectedPostsRouter.openapi(deletePostRoute, async (c) => {
	const { id } = c.req.valid("param");

	const user = getCurrentUser(c);

	await postService.delete(id, user);

	return c.json(null);
});

postsRouter.route("/", protectedPostsRouter);
