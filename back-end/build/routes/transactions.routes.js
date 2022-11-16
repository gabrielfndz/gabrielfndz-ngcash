"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const transaction_controller_1 = require("../controllers/transaction.controller");
const router = (0, express_1.Router)();
const transactionController = new transaction_controller_1.default();
router.post('/', transactionController.create);
router.get('/', transactionController.get);
exports.default = router;
//# sourceMappingURL=transactions.routes.js.map