import { Router } from 'express';
import DashboardController from '../controllers/dashboard.controller';

const router = Router();
const dashboardController = new DashboardController();

router.get('/', dashboardController.get);

export default router;
