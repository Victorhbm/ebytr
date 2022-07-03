import Task from "../database/models/Task";

class TaskService {
  public async getTasksByUserId(userId: number) {    
    const tasks = await Task.findAll({ where: { userId } });

    return tasks;
  }
}

export default new TaskService();