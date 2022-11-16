"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const login_controller_1 = require("../controllers/login.controller");
const registerValidation_1 = require("../middlewares/registerValidation");
const router = (0, express_1.Router)();
const loginController = new login_controller_1.default();
router.post('/', loginController.login);
router.post('/register', registerValidation_1.default, loginController.create);
exports.default = router;
//# sourceMappingURL=login.routes.js.map