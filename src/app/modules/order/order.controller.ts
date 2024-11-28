import { Request, Response } from "express";
import { ProductService } from "../product/product.service";
import { OrderService } from "./order.service";

const createOrder =async (req:Request, res:Response) => {
	try {
		const orderData = req.body
		console.log(orderData)

		const product = await ProductService.getSingleProduct(orderData.product)
		if(!product){
			res.status(404).json({
				message: 'Product Not Found',
				status: false,
			})
		}else if(orderData.quantity> product.quantity ){
			res.status(400).json({
				message: 'Insufficient Stock for this product',
				status: false,
			})
		}else{
			const result = await OrderService.createOrderIntoDB(orderData)
			res.status(200).json({
				message: 'Order Created successfully ✅',
				status: true,
				data: result,
			  });
		}
		
	} catch (error:any) {
		res.status(500).json({
			message: 'Validation Failed',
			status: false,
			error: error.errors,
			stack: error.stack,
		  });
	}
}
export const  OrderController  = {
	createOrder
}