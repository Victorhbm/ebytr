import { Model, DataTypes } from 'sequelize';
import db from '.';
import Task from './Task';

class User extends Model {
  declare id: number;
  declare name: string;
  declare email: string;
  declare password: string;
}

User.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: DataTypes.STRING,
  email: DataTypes.STRING,
  password: DataTypes.STRING,
}, {
  sequelize: db,
  tableName: 'Users',
  timestamps: false,
});

User.hasMany(Task, { foreignKey: 'userId', as: 'user' });
Task.belongsTo(User, { foreignKey: 'userId', as: 'user' });

export default User;