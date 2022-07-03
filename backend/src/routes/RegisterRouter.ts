import { Router } from "express";
import UserController from "../controllers/UserController";
import UserMiddleware from "../middlewares/UserMiddleware";

const router = Router();

router.post('/', UserMiddleware.checkEmail, UserController.register);

export default router;