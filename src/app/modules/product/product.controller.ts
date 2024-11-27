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
const getProducts = async (req:Request, res:Response) =>{
	try {
		const {searchTerm} = req.query
		let result;
		if(searchTerm){
			result = await ProductService.getAllSearchProductFromDB(searchTerm as string)
		}else{
			result = await ProductService.getAllProductFromDB()
		}
		res.status(200).json({
			message: 'Products retrieved successfully',
			success: true,
			data: result,
		});
	} catch (error:any) {
		res.status(500).json({
			message: 'Something Went Wrong !',
			status: false,
			error: error.errors,
			stack: error.stack,
		})
	}
}

export const ProductController = {
  createProduct,
  getProducts
};
