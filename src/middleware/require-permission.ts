import type { MiddlewareHandler } from "hono";
import type { AppPermissions } from "../auth/permissions.js";
import {
	ForbiddenError,
	ServiceUnavailableError,
	UnauthorizedError,
} from "../errors/http-errors.js";
import { auth } from "../lib/auth.js";
import { logger } from "../lib/logger.js";

export function requirePermission(
	permissions: AppPermissions,
): MiddlewareHandler {
	return async (c, next) => {
		const user = c.get("user");

		if (!user) {
			throw new UnauthorizedError();
		}

		try {
			const result = await auth.api.userHasPermission({
				body: {
					userId: user.id,
					permissions,
				},
			});

			if (!result.success) {
				throw new ForbiddenError();
			}
		} catch (error) {
			if (error instanceof ForbiddenError) {
				throw error;
			}

			logger.error(
				{
					err: error,
					requestId: c.get("requestId"),
					userId: user.id,
					permissions,
				},
				"Failed to check user permissions",
			);

			throw new ServiceUnavailableError("Authorization service unavailable");
		}

		await next();
	};
}
