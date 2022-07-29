import { NextFunction, Request, Response } from "express";
import TaskSchema from "../schemas/TaskSchema";

class TaskMiddleware {
  public taskCreateBodyValidate(req: Request, _res: Response, next: NextFunction) {
    const { error } = TaskSchema.createTaskSchema.validate(req.body);

    if (error) throw error;

    next();
  };

  public updateStatusBodyValidate(req: Request, _res: Response, next: NextFunction) {
    const { error } = TaskSchema.updateStatusSchema.validate(req.body);

    if (error) throw error;

    next();
  };

  public updateTaskNameBodyValidate(req: Request, _res: Response, next: NextFunction) {
    const { error } = TaskSchema.updateTaskNameSchema.validate(req.body);

    if (error) throw error;

    next();
  };
};

export default new TaskMiddleware();