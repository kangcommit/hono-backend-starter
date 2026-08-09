import type { AuthUser } from "../lib/auth.js";

export const ROLES = {
	ADMIN: "admin",
	USER: "user",
} as const;

export function getRoles(user: AuthUser): string[] {
	return (
		user.role
			?.split(",")
			.map((role) => role.trim())
			.filter(Boolean) ?? []
	);
}

function hasRole(user: AuthUser, role: string): boolean {
	return getRoles(user).includes(role);
}

export function isAdmin(user: AuthUser): boolean {
	return hasRole(user, ROLES.ADMIN);
}
