import { Request, Response } from 'express';
import Users from '../database/models/Users';
import TransactionService from '../services/transaction.service';

export default class TransactionController {
  constructor(private transactionService = new TransactionService) { }

  public create = async (req: Request, res: Response) => {
    try {
      const { debitedAccount, creditedAccount, value } = req.body;
      const newTransaction = await this.transactionService.create(debitedAccount, creditedAccount, value)
      return res.status(200).json(newTransaction);
    } catch (e) {
      console.log(e);
    }
  }

  public get = async (req: Request, res: Response) => {
    const { username } = req.headers;
    const usernameParsed = String(username)
    const getTransactions = await this.transactionService.get(usernameParsed);
    return res.status(200).json(getTransactions);
  }
}