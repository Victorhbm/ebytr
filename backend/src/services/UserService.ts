import User from "../database/models/User";
import { IUser } from "../interfaces/IUser";
import * as Bcrypt from 'bcryptjs';
import Token from "../helpers/Token";

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
  }
}

export default new UserService();