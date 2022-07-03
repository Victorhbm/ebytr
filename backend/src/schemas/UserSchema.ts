import * as Joi from 'joi';

class UserSchema {
  public registerSchema = Joi.object({
    name: Joi.string().min(3).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
  });
};

export default new UserSchema();