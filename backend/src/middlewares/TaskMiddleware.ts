import { NextFunction, Request, Response } from "express";
import TaskSchema from "../schemas/TaskSchema";

class TaskMiddleware {
  public taskCreateBodyValidate(req: Request, _res: Response, next: NextFunction) {
    const { error } = TaskSchema.createTaskSchema.validate(req.body);

    if (error) throw error;

    next();
  }
};

export default new TaskMiddleware();