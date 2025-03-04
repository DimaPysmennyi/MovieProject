import { Prisma } from "@prisma/client";

export type Movie = Prisma.MovieGetPayload<{}>
export type CreateMovie = Prisma.MovieCreateInput;