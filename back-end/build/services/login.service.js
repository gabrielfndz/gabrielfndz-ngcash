"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Users_1 = require("../database/models/Users");
class LoginService {
    constructor() {
        this._user = Users_1.default;
    }
    async login(username, password) {
        const user = await this._user.findOne({
            where: { username },
        });
        if (!user)
            return null;
        return user;
    }
}
exports.default = LoginService;
//# sourceMappingURL=login.service.js.map