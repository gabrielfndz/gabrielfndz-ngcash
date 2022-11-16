import { Router } from 'express';
import LoginController from '../controllers/login.controller';
import registerValidation from '../middlewares/registerValidation';

const router = Router();
const loginController = new LoginController();

router.post('/', loginController.login);
router.post('/register', registerValidation, loginController.create);

export default router;
