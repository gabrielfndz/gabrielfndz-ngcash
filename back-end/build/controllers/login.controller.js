"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const login_service_1 = require("../services/login.service");
class LoginController {
    constructor(loginService = new login_service_1.default) {
        this.loginService = loginService;
        this.login = async (req, res) => {
            try {
                const { username, password } = req.body;
                const user = await this.loginService.login(username, password);
                return res.status(200).json(user);
            }
            catch (e) {
                console.log(e);
            }
        };
    }
}
exports.default = LoginController;
//# sourceMappingURL=login.controller.js.map