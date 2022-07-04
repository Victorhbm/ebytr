import * as Joi from 'joi';

class TaskSchema {
  public createTaskSchema = Joi.object({
    task: Joi.string().required(),
    user: Joi.object(),
  });

  public updateTaskStatusSchema = Joi.object({
    status: Joi.string().valid('Pendente', 'Em andamento', 'Pronto').required(),
    user: Joi.object(),
  });
};

export default new TaskSchema();