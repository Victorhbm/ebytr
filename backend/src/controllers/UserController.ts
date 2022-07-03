import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import UserService from "../services/UserService";

class UserController {
  public async register(req: Request, res: Response) {
    try {
      const userCreated = await UserService.register(req.body);

      return res.status(StatusCodes.CREATED).json(userCreated);
    } catch (error) {
      console.log(error);
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: 'Erro no servidor!' });
    }
  }
}

export default new UserController();