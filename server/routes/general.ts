import express from 'express';

import { getDashboardStats, getUser } from '../controllers/general';

const router = express.Router();

router.get('/user/:id', getUser);
router.get('/dashboard', getDashboardStats);

export default router;
