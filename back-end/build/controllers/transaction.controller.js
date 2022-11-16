"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const transaction_service_1 = require("../services/transaction.service");
class TransactionController {
    constructor(transactionService = new transaction_service_1.default) {
        this.transactionService = transactionService;
        this.create = async (req, res) => {
            try {
                const { debitedAccount, creditedAccount, value } = req.body;
                const newTransaction = await this.transactionService.create(debitedAccount, creditedAccount, value);
                return res.status(200).json(newTransaction);
            }
            catch (e) {
                console.log(e);
            }
        };
        this.get = async (req, res) => {
            const { username } = req.headers;
            const usernameParsed = String(username);
            const getTransactions = await this.transactionService.get(usernameParsed);
            return res.status(200).json(getTransactions);
        };
    }
}
exports.default = TransactionController;
//# sourceMappingURL=transaction.controller.js.map