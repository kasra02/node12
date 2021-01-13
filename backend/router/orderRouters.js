import express from "express";
import Product from "../models/productModel.js";
import {addOrderItems,getOrderById,updateOrderToPaid,getMyOrders} from "../controllers/orderController.js";
import {protect} from "../middleware/authMiddleWare.js";

const router = express.Router()
router.route('/:id').get(protect, getOrderById)
router.route('/myorders').get(protect, getMyOrders)
router.route('/:id/pay').put(protect, updateOrderToPaid)
router.route('/').post(protect,addOrderItems)



export default router