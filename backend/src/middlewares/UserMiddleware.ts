import { NextFunction, Request, Response } from "express";
import User from "../database/models/User";
import { StatusCodes } from 'http-status-codes';
import UserSchema from "../schemas/UserSchema";

class UserMiddleware {
  public async checkEmail(req: Request, res: Response, next: NextFunction) {
    const { email } = req.body;

    const getUserByEmail = await User.findOne({ where: { email } })

    if (getUserByEmail) {
      res.status(StatusCodes.CONFLICT).json({ message: 'E-mail já cadastrado!' })
    };

    next();
  };

  public registerValidate(req: Request, _res: Response, next: NextFunction) {
    const { error } = UserSchema.registerSchema.validate(req.body);

    if (error) throw error;

    next();
  };

  public loginValidate(req: Request, _res: Response, next: NextFunction) {
    const { error } = UserSchema.loginSchema.validate(req.body);

    if (error) throw error;

    next();
  };
};

export default new UserMiddleware();