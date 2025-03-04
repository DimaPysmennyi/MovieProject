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

async function getAllUsers(): Promise <IError | ISuccess<User[]>>{
    const users = await userRepository.getAllUsers();
    if (!users){
        return {status: "error", message: "Failed to fetch users"}
    }

    return {status: "success", data: users};

}

async function getUserById(id: number): Promise <IError | ISuccess<User>>{
    const user = await userRepository.getUserById(id);
    if (!user){
        return {status: "error", message: "User not found"}
    }
    return {status: "success", data: user};
}

async function updateUser(id: number, data: CreateUser): Promise <IError | ISuccess<User>>{
    const updatedUser = await userRepository.updateUser(id, data);
    if (!updatedUser){
        return {status: "error", message: "Failed to update user"}
    }
    return {status: "success", data: updatedUser};
}

const userService = {
    registerUser: registerUser,
    authUser: authUser,
    getAllUsers: getAllUsers,
    getUserById: getUserById,
    updateUser: updateUser,
}
export default userService;