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
      status: 'Em andamento',
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    return taskCreated;
  };
};

export default new TaskService();