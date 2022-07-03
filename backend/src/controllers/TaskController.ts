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
    }
  }
}

export default new TaskController();