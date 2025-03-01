import { Router } from "express";
import userController from "./userController";


const router = Router();

router.post('/registration', userController.registerUser);
router.post('/login', userController.authUser);

export default router;