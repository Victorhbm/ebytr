import { Router } from "express";
import TaskController from "../controllers/TaskController";
import AuthMiddleware from "../middlewares/AuthMiddleware";

const router = Router();

router.get('/',
  AuthMiddleware,
  TaskController.getTasksByUserId
);

export default router;