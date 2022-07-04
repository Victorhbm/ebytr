import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import TaskService from "../services/TaskService";

class TaskController {
  public async getTasksByUserId(req: Request, res: Response) {
    try {
      const { id } = req.body.user.data;

      const tasks = await TaskService.getTasksByUserId(id);

      return res.status(StatusCodes.OK).json(tasks);
    } catch (error) {
      console.log(error);
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: 'Erro no servidor!' });
    };
  };

  public async createTask(req: Request, res: Response) {
    try {
      const { task, user } = req.body;
      const { id } = user.data;

      const taskCreated = await TaskService.createTask(task, id);

      return res.status(StatusCodes.CREATED).json(taskCreated);
    } catch (error) {
      console.log(error);
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: 'Erro no servidor!' });
    };
  };

  public async deleteTask(req: Request, res: Response) {
    try {
      const { id } = req.params;

      await TaskService.deleteTask(+id);

      return res.status(StatusCodes.OK).send();
    } catch (error) {
      console.log(error);
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: 'Erro no servidor!' });
    };
  };
}

export default new TaskController();