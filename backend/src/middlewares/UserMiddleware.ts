import { NextFunction, Request, Response } from "express";
import User from "../database/models/User";
import { StatusCodes } from 'http-status-codes';

class UserMiddleware {
  public async checkEmail(req: Request, res: Response, next: NextFunction) {
    const { email } = req.body;

    const getUserByEmail = await User.findOne({ where: { email } })

    if (getUserByEmail) {
      res.status(StatusCodes.CONFLICT).json({ message: 'E-mail já cadastrado!' })
    };

    next();
  };
};

export default new UserMiddleware();