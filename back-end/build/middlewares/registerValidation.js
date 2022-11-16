"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Users_1 = require("../database/models/Users");
const registerValidation = async (req, res, next) => {
    const { username, password } = req.body;
    const regex = /^(?=.*[A-Z])(?=.*?[0-9])[0-9a-zA-Z$*&@#]{8,}$/;
    const user = await Users_1.default.findOne({
        where: { username }
    });
    if (username.length < 3) {
        return res.status(400).json({ message: 'Nome usuário deve ter no mínimo 3 caracteres' });
    }
    if (user) {
        return res.status(404).json({ message: 'Usuário já cadastrado' });
    }
    if (password.length < 8) {
        return res.status(400).json({ message: 'Senha deve ter no mínimo 8 caracteres' });
    }
    if (!regex.test(password)) {
        return res.status(400).json({ message: 'Senha deve ter ao menos 1 letra maiúscula e 1 número' });
    }
    next();
};
exports.default = registerValidation;
//# sourceMappingURL=registerValidation.js.map