"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const login_service_1 = require("../services/login.service");
const CreateToken_1 = require("../helpers/CreateToken");
const Users_1 = require("../database/models/Users");
class LoginController {
    constructor(loginService = new login_service_1.default) {
        this.loginService = loginService;
        this.login = async (req, res) => {
            try {
                const { username, password } = req.body;
                const user = await this.loginService.login(username, password);
                const createdToken = CreateToken_1.default.generateToken(username);
                return res.status(200).json({
                    id: user === null || user === void 0 ? void 0 : user.id,
                    username: user === null || user === void 0 ? void 0 : user.username,
                    accountId: user === null || user === void 0 ? void 0 : user.accountId,
                    token: createdToken
                });
            }
            catch (e) {
                console.log(e);
            }
        };
        this.create = async (req, res) => {
            try {
                const { username, password } = req.body;
                const findUser = await Users_1.default.findOne({
                    where: { username }
                });
                if (findUser) {
                    return res.status(400).json({ message: 'Usuário já cadastrado' });
                }
                const user = await this.loginService.create(username, password);
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