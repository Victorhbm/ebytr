import User from "../database/models/User";
import { IUser } from "../interfaces/IUser";
import * as Bcrypt from 'bcryptjs';

class UserService {
  public async register(userData: IUser) {
    const { name, email, password } = userData;

    const passwordHash = await Bcrypt.hash(password, 1);

    const { id } = await User.create({ name, email, password: passwordHash });

    return {
      id,
      name,
      email
    };
  }
}

export default new UserService();