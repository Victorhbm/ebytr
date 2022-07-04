import User from "../database/models/User";
import { IUser } from "../interfaces/IUser";
import * as Bcrypt from 'bcryptjs';
import Token from "../helpers/Token";
import { StatusCodes } from "http-status-codes";

class UserService {
  public async register(userData: IUser) {
    const { name, email, password } = userData;

    const passwordHash = await Bcrypt.hash(password, 1);

    const { id } = await User.create({ name, email, password: passwordHash });

    const token = Token.sign({ data: { id, name, email } })

    return {
      user: {
        id,
        name,
        email
      },
      token,
    };
  };

  public async login(email: string, password: string) {
    const getUser = await User.findOne({ where: { email } });

    if (!getUser) return { code: StatusCodes.NOT_FOUND, body: { message: 'Email not found' } };

    const checkPassword = await Bcrypt.compare(password, getUser.password);

    if (!checkPassword) return { code: StatusCodes.UNAUTHORIZED, body: { message: 'Incorrect password' } };

    const { id, name } = getUser;

    const token = Token.sign({ data: { id, name, email } });

    const data = {
      user: {
        id,
        name,
        email
      },
      token,
    };

    return { code: StatusCodes.OK, body: data };
  }
}

export default new UserService();