import { Prisma } from "@prisma/client";
import client from "../client/client";
import { CreateUser } from "./types";
import { errors, IErrors } from "../config/errorCodes";

async function findUserByEmail(email: string){
    try{
        const user = client.user.findUnique({
            where: {
                email: email,
            }
        })
        return user;
    } catch(error){
        if (error instanceof Prisma.PrismaClientKnownRequestError){
            if (error.code in Object.keys(errors)){
                const errorKey: keyof IErrors = error.code
                console.log(errors[errorKey])
            }
        }
    }
}

async function registerUser(data: CreateUser){
    try{
        const user = client.user.create({
            data: data,
        })
        return user
    } catch(error){
        if (error instanceof Prisma.PrismaClientKnownRequestError){
            if (error.code in Object.keys(errors)){
                const errorKey: keyof IErrors = error.code
                console.log(errors[errorKey])
            }
        }
    }
}



const userRepository = {
    findUserByEmail: findUserByEmail,
    registerUser: registerUser,
};

export default userRepository;