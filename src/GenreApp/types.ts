import { Prisma } from "@prisma/client";

export type Genre = Prisma.GenreGetPayload<{}>;
export type CreateGenre = Prisma.GenreCreateInput;