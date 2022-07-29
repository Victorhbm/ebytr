import * as Joi from 'joi';

class TaskSchema {
  public createTaskSchema = Joi.object({
    task: Joi.string().required(),
    user: Joi.object(),
  });

  public updateStatusSchema = Joi.object({
    status: Joi.string().valid('To do', 'In Progress', 'Done').required(),
    user: Joi.object(),
  });

  public updateTaskNameSchema = Joi.object({
    task: Joi.string().required(),
    user: Joi.object(),
  });
};

export default new TaskSchema();