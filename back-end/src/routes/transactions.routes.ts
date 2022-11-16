import { Router } from 'express';
import TransactionController from '../controllers/transaction.controller';
const router = Router();

const transactionController = new TransactionController();

router.post('/', transactionController.create);
router.get('/', transactionController.get);

export default router;
