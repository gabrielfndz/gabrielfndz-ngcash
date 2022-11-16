import { Model, INTEGER, REAL } from 'sequelize';
import db from '.';
import Accounts from './Accounts';

export default class Transactions extends Model {
  id!: number;
  debitedAccount!: number;
  creditedAccount!: number;
  value!: number;
}

Transactions.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  debitedAccount: {
    type: INTEGER,
    allowNull: false,
  },
  creditedAccount: {
    type: INTEGER,
    allowNull: false,
  },
  value: {
    type: REAL,
    allowNull: false,
  },
}, {
  sequelize: db,
  modelName: 'Transactions',
  timestamps: true,
  updatedAt: false,
});


Transactions.belongsTo(Accounts, { foreignKey: 'debitedAccount', as: 'debAccount'});
Transactions.belongsTo(Accounts, { foreignKey: 'creditedAccount', as: 'credAccount'});
