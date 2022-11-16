"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = require(".");
const Users_1 = require("./Users");
class Accounts extends sequelize_1.Model {
}
exports.default = Accounts;
Accounts.init({
    id: {
        type: sequelize_1.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    balance: {
        type: sequelize_1.REAL,
        allowNull: false,
    }
}, {
    sequelize: _1.default,
    modelName: 'Accounts',
    timestamps: false,
});
Accounts.hasOne(Users_1.default, { foreignKey: 'accountId', as: 'Users' });
Users_1.default.belongsTo(Accounts, { foreignKey: 'accountId', as: 'Accounts' });
// Accounts.belongsTo(Transactions, { foreignKey: 'creditedAccount', as: 'credited'});
// Accounts.belongsTo(Transactions, { foreignKey: 'debitedAccount', as : 'debited'});
//# sourceMappingURL=Accounts.js.map