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
        type: sequelize_1.INTEGER,
        allowNull: false,
    }
}, {
    sequelize: _1.default,
    modelName: 'Accounts',
    timestamps: false,
});
Accounts.hasOne(Users_1.default, { foreignKey: 'accountId', as: 'Users' });
//# sourceMappingURL=Accounts.js.map