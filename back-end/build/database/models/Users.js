"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = require(".");
const Accounts_1 = require("./Accounts");
class Users extends sequelize_1.Model {
}
exports.default = Users;
Users.init({
    id: {
        type: sequelize_1.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    username: {
        type: sequelize_1.STRING,
        allowNull: false,
    },
    password: {
        type: sequelize_1.STRING,
        allowNull: false,
    },
    accountId: {
        type: sequelize_1.INTEGER,
        allowNull: false,
    },
}, {
    sequelize: _1.default,
    modelName: 'Users',
    timestamps: false,
});
Users.belongsTo(Accounts_1.default, { foreignKey: 'accountId', as: 'Accounts' });
//# sourceMappingURL=Users.js.map