import { StatusCodes } from "http-status-codes";
import Task from "../database/models/Task";

class TaskService {
  public async getTasksByUserId(userId: number) {    
    const tasks = await Task.findAll({ where: { userId } });

    return tasks;
  };

  public async createTask(task: string, userId: number) {
    const taskCreated = await Task.create({
      task,
      userId,
      status: 'To do',
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    return taskCreated;
  };

  public async deleteTask(id: number) {
    await Task.destroy({ where: { id } });
  }

  public async updateTaskStatus(status: string, id: number) {
    const findTask = await Task.findOne({ where: { id } });

    if (!findTask) return { code: StatusCodes.NOT_FOUND, message: 'Task not found' };

    await Task.update({ status }, { where: { id } });

    return { code: StatusCodes.OK, message: 'Successfully updated' }
  }

  public async updateTaskName(task: string, id: number) {
    const findTask = await Task.findOne({ where: { id } });

    if (!findTask) return { code: StatusCodes.NOT_FOUND, message: 'Task not found' };

    await Task.update({ task }, { where: { id } });

    return { code: StatusCodes.OK, message: 'Successfully updated' }
  }
};

export default new TaskService();