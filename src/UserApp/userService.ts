import { sign } from "jsonwebtoken";
import { IError, ISuccess } from "../types/types";
import { CreateUser, User } from "./types"
import userRepository from "./userRepository"
import { SECRET_KEY } from "../config/token";
import { compare, hash } from "bcrypt";
import { Prisma } from "@prisma/client";

async function registerUser(data: Prisma.UserCreateInput): Promise <IError | ISuccess<string>>{
    const user = await userRepository.findUserByEmail(data.email);
    if (user){
        return {status: "error", message: "User already exists"}
    }

    const hashedPassword = await hash(data.password, 10);

    const newData = {
        ...data,
        password: hashedPassword,
    }

    const registeredUser = await userRepository.registerUser(newData);
    if (!registeredUser){
        return {status: "error", message: "Registration failed"}
    }
    const userId = {id: registeredUser.id};
    const token = sign(userId, SECRET_KEY, {expiresIn: '1d'});
    return {status: "success", data: token}
}

async function authUser(email: string, password: string): Promise <IError | ISuccess<string>>{
    const user = await userRepository.findUserByEmail(email);
    if (!user){
        return {status: "error", message: "User does not exist"}
    }

    const match = await compare(password, user.password);
    if (!match){
        return {status: "error", message: "Passwords do not match"}
    }

    const token = sign({id: user.id}, SECRET_KEY, {expiresIn: '1d'});
    return {status: "success", data: token};
}

const userService = {
    registerUser: registerUser,
    authUser: authUser
}
export default userService;