import z from "zod";

export const CurrentUserSchema = z.object({
	id: z.string(),
	name: z.string(),
	email: z.email(),
	emailVerified: z.boolean(),
	image: z.string().nullable().optional(),
	createdAt: z.iso.datetime(),
	updatedAt: z.iso.datetime(),
});

export const CurrentUserResponseSchema = z.object({
	data: CurrentUserSchema,
});
