import { Router } from "express";
import TaskController from "../controllers/TaskController";
import AuthMiddleware from "../middlewares/AuthMiddleware";
import TaskMiddleware from "../middlewares/TaskMiddleware";

const router = Router();

router.use(AuthMiddleware);

router.get('/',
  TaskController.getTasksByUserId
);

router.post('/',
  TaskMiddleware.taskCreateBodyValidate,
  TaskController.createTask
);

router.delete('/:id',
  TaskController.deleteTask
);

router.patch('/:id',
  TaskMiddleware.taskUpdateBodyValidate,
  TaskController.updateTaskStatus
);

export default router;