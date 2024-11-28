
import express from 'express';
import { OrderController } from './order.controller';
const router = express.Router();
//order create 
router.post('/orders',OrderController.createOrder )

router.get('/orders/revenue', )

export const OrderRoutes = router