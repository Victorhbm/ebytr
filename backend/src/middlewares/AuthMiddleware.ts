import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import Token from "../helpers/Token";

async function AuthMiddleware(req: Request, res: Response, next: NextFunction) {
  const userToken = req.headers.authorization;

  if (!userToken) return res.status(StatusCodes.UNAUTHORIZED).json({ message: 'Token not found' });

  try {
    const decoded = Token.verify(userToken);

    req.body.user = decoded;

    next();
  } catch (error) {
    return res.status(StatusCodes.UNAUTHORIZED).json({ message: 'Expired or invalid token' });
  };
};

export default AuthMiddleware;
