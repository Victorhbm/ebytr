import { Router } from "express";
import TaskController from "../controllers/TaskController";
import AuthMiddleware from "../middlewares/AuthMiddleware";
import TaskMiddleware from "../middlewares/TaskMiddleware";

const router = Router();

router.get('/',
  AuthMiddleware,
  TaskController.getTasksByUserId
);

router.post('/',
  TaskMiddleware.taskCreateBodyValidate,
  AuthMiddleware,
  TaskController.createTask
);

router.delete('/:id',
  AuthMiddleware,
  TaskController.deleteTask
);

export default router;