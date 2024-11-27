import { Request, Response } from 'express';
import { ProductService } from './product.service';

const createProduct = async (req: Request, res: Response) => {
  try {
    const prouductData = req.body;
   
    const result = await ProductService.createProductIntoDB(prouductData);
	res.status(200).json({
		message: 'Bicycle created successfully',
		success: true,
		data: result,
	  });
  } catch (err: any) {
    res.status(500).json({
      message: 'Validation Failed',
      success: false,
      error: err.errors,
      stack: err.stack,
    });
  }
};

export const ProductController = {
  createProduct,
};
