import express from "express"
import { ProductController } from "./product.controller"
const router = express.Router()
router.post('/products',ProductController.createProduct)
router.get('/products/:productId',ProductController.getSingleData)
router.put('/products/:productId',ProductController.updateProductData)
router.get('/products',ProductController.getProducts)
export const ProductRoutes = router;