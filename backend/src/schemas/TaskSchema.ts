import * as Joi from 'joi';

class TaskSchema {
  public createTaskSchema = Joi.object({
    task: Joi.string().required(),
  });
};

export default new TaskSchema();