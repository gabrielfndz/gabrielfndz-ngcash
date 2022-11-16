import { Model, INTEGER, REAL } from 'sequelize';
import db from '.';
import Transactions from './Transactions';
import Users from './Users';

export default class Accounts extends Model {
  id!: number;
  balance!: number;
}

Accounts.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  balance: {
    type: REAL,
    allowNull: false,
  }
}, {
  sequelize: db,
  modelName: 'Accounts',
  timestamps: false,
});

Accounts.hasOne(Users, { foreignKey: 'accountId', as: 'Users'});
Users.belongsTo(Accounts, { foreignKey: 'accountId', as: 'Accounts'});
// Accounts.belongsTo(Transactions, { foreignKey: 'creditedAccount', as: 'credited'});
// Accounts.belongsTo(Transactions, { foreignKey: 'debitedAccount', as : 'debited'});





