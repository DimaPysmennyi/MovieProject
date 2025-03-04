import userService from "./userService";
import { Request, Response } from "express";
import { sign } from "jsonwebtoken";
import { SECRET_KEY } from "../config/token";

async function registerUser(req: Request, res: Response){
    const data = req.body;
    const result = await userService.registerUser(data);
    if (result.status == "error"){
        res.send(result.message);
        return;
    }

    res.json(result.data);
}

async function authUser(req: Request, res: Response){
    const data = req.body;
    const result = await userService.authUser(data.email, data.password);
    if (result.status == "error"){
        res.json(result.message);
        return;
    }

    res.json(result.data);
}

async function getAllUsers(req: Request, res: Response) {
    const result = await userService.getAllUsers();
    
    res.json(result)
}

async function getUserById(req: Request, res: Response) {
    const id = +req.params.id
    const result = await userService.getUserById(id);

    res.json(result)
}

async function updateUser(req: Request, res: Response) {
    const id = +req.params.id
    const data = req.body;
    const result = await userService.updateUser(id, data);

    res.json(result)
}

const userController = {
    registerUser: registerUser,
    authUser: authUser,
    getAllUsers: getAllUsers,
    getUserById: getUserById,
    updateUser: updateUser,
}

export default userController;