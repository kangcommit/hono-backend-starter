import type { AppPermissions } from "../../auth/permissions.js";

export const POST_PERMISSIONS = {
	CREATE: { post: ["create"] },
	READ: { post: ["read"] },
	UPDATE: { post: ["update"] },
	DELETE: { post: ["delete"] },
} satisfies Record<string, AppPermissions>;
