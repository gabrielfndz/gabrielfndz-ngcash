import Users from '../database/models/Users';
import Accounts from '../database/models/Accounts';
import Transactions from '../database/models/Transactions';
const Op = require('Sequelize').Op;

export default class TransactionService {
  private _transactions = Transactions;
  private _accounts = Accounts;
  private _user = Users;

  public create = async (debAccount: string, credAccount: string, value: number) => {

    const debUser = await this._user.findOne({
      where: { username: debAccount },
      include: {
        model: Accounts,
        as: 'Accounts'
      }
    }) 

    const debBalance = await this._accounts.findOne({
      where: { id: debUser.accountId }
    });

    if(debBalance.balance < 0 || (debBalance.balance - value) < 0) {
      throw new Error('Saldo Insuficiente');
    }

    
    const credUser = await this._user.findOne({
      where: { username: credAccount },
      include: {
        model: Accounts,
        as: 'Accounts'
      }
    })     

    
    if(credUser!.username === debAccount) {
      return null;
    }
    const newTransaction = await this._transactions.create({
      debitedAccount: debUser!.id,
      creditedAccount: credUser!.id,
      value,
    })

    const isDebitedAccount = await this._accounts.findOne({
      where: { id: newTransaction.debitedAccount }
    });

    const newDebitedValue = await this._accounts.update({
      balance: isDebitedAccount!.balance - newTransaction.value
    }, {
      where: { id: newTransaction.debitedAccount}
    })

    const isCreditedAccount = await this._accounts.findOne({
      where: { id: newTransaction.creditedAccount }
    });

    const newCreditedAccount = await this._accounts.update({
      balance: isCreditedAccount!.balance + newTransaction.value
    }, {
      where: { id: newTransaction.creditedAccount}
    })

    return newTransaction;
  }

  public get = async(username: string) => {
    const user = await this._user.findOne({
      where: { username },
      include: {
        model: Accounts,
        as: 'Accounts'
      }
    }) 

    const getTransactions = await this._transactions.findAll({
      where: {
        [Op.or]: [{ debitedAccount: user!.accountId }, { creditedAccount: user!.accountId }]
      },
      include: [{
        model: Accounts,
        as: 'debAccount',
        include: [{
          model: Users,
          as: 'Users',
          attributes: ['username'],
          
        }]
      }, {
        model: Accounts,
        as: 'credAccount',
        include: [{
          model: Users,
          as: 'Users',
          attributes: ['username'],
        }]
      }],
      order: [
        ['id', 'DESC'],
      ],
    })

    return getTransactions;

  }
}