import { TProduct } from "./product.interface";
import { ProductModel } from "./product.model";

const createProductIntoDB = async(productData:TProduct) =>{
	const result = await ProductModel.create(productData)

	return result
}
const getAllProductFromDB = async () => {
	const result = await ProductModel.find();
	
	return result;
  };
  const getAllSearchProductFromDB = async (searchTerm: string) => {
	const searchFields = ['name', 'brand', 'type'];
  
	const searchConditions = searchFields.map((field) => ({
	  [field]: { $regex: searchTerm, $options: 'i' },
	}));
  
	const result = await ProductModel.find({
	  $or: searchConditions,
	});
  
	return result;
  };
  
export const ProductService = {
	createProductIntoDB,
	getAllProductFromDB,
	getAllSearchProductFromDB
}