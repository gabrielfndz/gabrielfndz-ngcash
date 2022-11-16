"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Users_1 = require("../database/models/Users");
const Accounts_1 = require("../database/models/Accounts");
class DashboardService {
    constructor() {
        this._user = Users_1.default;
        this.get = async (username) => {
            const user = await this._user.findOne({
                where: { username },
                include: {
                    model: Accounts_1.default,
                    as: 'Accounts'
                }
            });
            return user;
        };
    }
}
exports.default = DashboardService;
//# sourceMappingURL=dashboard.service.js.map