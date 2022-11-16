"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Users_1 = require("../database/models/Users");
const Accounts_1 = require("../database/models/Accounts");
const Transactions_1 = require("../database/models/Transactions");
const Op = require('Sequelize').Op;
class TransactionService {
    constructor() {
        this._transactions = Transactions_1.default;
        this._accounts = Accounts_1.default;
        this._user = Users_1.default;
        this.create = async (debAccount, credAccount, value) => {
            const debUser = await this._user.findOne({
                where: { username: debAccount },
                include: {
                    model: Accounts_1.default,
                    as: 'Accounts'
                }
            });
            const credUser = await this._user.findOne({
                where: { username: credAccount },
                include: {
                    model: Accounts_1.default,
                    as: 'Accounts'
                }
            });
            if (credUser.username === debAccount) {
                return null;
            }
            const newTransaction = await this._transactions.create({
                debitedAccount: debUser.id,
                creditedAccount: credUser.id,
                value,
            });
            const isDebitedAccount = await this._accounts.findOne({
                where: { id: newTransaction.debitedAccount }
            });
            const newDebitedValue = await this._accounts.update({
                balance: isDebitedAccount.balance - newTransaction.value
            }, {
                where: { id: newTransaction.debitedAccount }
            });
            const isCreditedAccount = await this._accounts.findOne({
                where: { id: newTransaction.creditedAccount }
            });
            const newCreditedAccount = await this._accounts.update({
                balance: isCreditedAccount.balance + newTransaction.value
            }, {
                where: { id: newTransaction.creditedAccount }
            });
            return newTransaction;
        };
        this.get = async (username) => {
            const user = await this._user.findOne({
                where: { username },
                include: {
                    model: Accounts_1.default,
                    as: 'Accounts'
                }
            });
            const getTransactions = await this._transactions.findAll({
                where: {
                    [Op.or]: [{ debitedAccount: user.accountId }, { creditedAccount: user.accountId }]
                },
                include: [{
                        model: Accounts_1.default,
                        as: 'debAccount',
                        include: [{
                                model: Users_1.default,
                                as: 'Users',
                                attributes: ['username'],
                            }]
                    }, {
                        model: Accounts_1.default,
                        as: 'credAccount',
                        include: [{
                                model: Users_1.default,
                                as: 'Users',
                                attributes: ['username'],
                            }]
                    }],
                order: [
                    ['id', 'DESC'],
                ],
            });
            return getTransactions;
        };
    }
}
exports.default = TransactionService;
//# sourceMappingURL=transaction.service.js.map