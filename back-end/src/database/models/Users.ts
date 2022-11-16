import { Model, INTEGER, STRING } from 'sequelize';
import db from '.';
import Accounts from './Accounts';

export default class Users extends Model {
  id!: number;
  username!: string;
  password!: string;
  accountId!: number;
}

Users.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: STRING,
    allowNull: false,
  },
  password: {
    type: STRING,
    allowNull: false,
  },
  accountId: {
    type: INTEGER,
    allowNull: true,
  },
}, {
  sequelize: db,
  modelName: 'Users',
  timestamps: false,
});

