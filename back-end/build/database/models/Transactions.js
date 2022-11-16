"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = require(".");
const Accounts_1 = require("./Accounts");
class Transactions extends sequelize_1.Model {
}
exports.default = Transactions;
Transactions.init({
    id: {
        type: sequelize_1.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    debitedAccount: {
        type: sequelize_1.INTEGER,
        allowNull: false,
    },
    creditedAccount: {
        type: sequelize_1.INTEGER,
        allowNull: false,
    },
    value: {
        type: sequelize_1.REAL,
        allowNull: false,
    },
}, {
    sequelize: _1.default,
    modelName: 'Transactions',
    timestamps: true,
    updatedAt: false,
});
Transactions.belongsTo(Accounts_1.default, { foreignKey: 'debitedAccount', as: 'debAccount' });
Transactions.belongsTo(Accounts_1.default, { foreignKey: 'creditedAccount', as: 'credAccount' });
//# sourceMappingURL=Transactions.js.map