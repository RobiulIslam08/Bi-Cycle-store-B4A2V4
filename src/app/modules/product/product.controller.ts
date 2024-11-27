import { Request, Response } from 'express';
import { ProductService } from './product.service';

//create product
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
// get all product and get data by searchTerm
const getProducts = async (req: Request, res: Response) => {
  try {
    const { searchTerm } = req.query;
    let result;
    if (searchTerm) {
      result = await ProductService.getAllSearchProductFromDB(
        searchTerm as string,
      );
    } else {
      result = await ProductService.getAllProductFromDB();
    }
    res.status(200).json({
      message: 'Products retrieved successfully',
      success: true,
      data: result,
    });


	//when product empty , show this message
	if (result.length === 0) {
		res.status(404).json({
		  message: 'No products found',
		  status: true,
		  data: [],
		});
	  } else {
		res.status(200).json({
		  message: 'Bicycles retrieved successfully',
		  status: true,
		  data: result,
		});
	  }
  } catch (error: any) {
    res.status(500).json({
      message: 'Something Went Wrong !',
      status: false,
      error: error.errors,
      stack: error.stack,
    });
  }
};

//get single data by id
const getSingleData = async (req: Request, res: Response) => {
  try {
    const productId = req.params.productId;
    const result = await ProductService.getSingleData(productId as string);

	//যদি product খুজে না পাওয়া যায় তাহলে product not found show করবে
	if (!result) {
		res.status(404).json({
		  message: 'Product not found',
		  status: false,
		});
	  } else {
		res.status(200).json({
		  message: 'Bicycle retrieved successfully',
		  status: true,
		  data: result,
		});
	  }
  } catch (error) {}
};
export const ProductController = {
  createProduct,
  getProducts,
  getSingleData,
};
