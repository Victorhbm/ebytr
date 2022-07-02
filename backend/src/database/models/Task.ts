import { Model, DataTypes } from 'sequelize';
import db from '.';

class Task extends Model {
  declare id: number;
  declare task: string;
  declare status: string;
  declare userID: number;
  declare createdAt: Date;
  declare updatedAt: Date;
}

Task.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  task: DataTypes.STRING,
  status: DataTypes.STRING,
  userId: DataTypes.INTEGER,
}, {
  sequelize: db,
  tableName: 'Tasks',
  timestamps: true,
  underscored: true,
});

export default Task;