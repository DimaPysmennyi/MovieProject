import { Prisma } from "@prisma/client";

export type User = Prisma.UserGetPayload<{
    select:{
        id: true,
        name: true,
        email: true,
        picture?: true,
        age?: true,
        description?: true,
        reviews?: true,
        movies?: true,
    }
}>;

export type CreateUser = Prisma.UserCreateInput;
