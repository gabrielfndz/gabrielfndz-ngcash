"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Users_1 = require("../database/models/Users");
const Accounts_1 = require("../database/models/Accounts");
class LoginService {
    constructor() {
        this._user = Users_1.default;
        this._accounts = Accounts_1.default;
    }
    async login(username, password) {
        const user = await this._user.findOne({
            where: { username },
        });
        if (!user)
            return null;
        return user;
    }
    async create(username, password) {
        const createAccount = await this._accounts.create({
            balance: 100,
        });
        const created = await this._user.findOrCreate({
            where: { username },
            defaults: {
                username,
                password,
            },
        });
        const updatedUser = await this._user.update({ accountId: createAccount.id }, {
            where: { username }
        });
        const getUpdatedUser = await this._user.findOne({
            where: { username }
        });
        if (!getUpdatedUser)
            return null;
        return getUpdatedUser;
    }
}
exports.default = LoginService;
//# sourceMappingURL=login.service.js.map