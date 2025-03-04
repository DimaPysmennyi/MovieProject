import { Router } from "express";
import userController from "./userController";


const router = Router();

router.post('/registration', userController.registerUser);
router.post('/login', userController.authUser);
router.post('/update', userController.updateUser)

router.get('/all', userController.getAllUsers)
router.get('/:id', userController.getUserById)

export default router;