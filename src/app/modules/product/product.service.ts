import { TProduct } from './product.interface';
import { ProductModel } from './product.model';

//create product
const createProductIntoDB = async (productData: TProduct) => {
  const result = await ProductModel.create(productData);

  return result;
};
//get all product
const getAllProductFromDB = async () => {
  const result = await ProductModel.find();

  return result;
};
//get data from searchTerm
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

//get single data
const getSingleData = async (productId:string) => {
	const result = await ProductModel.findById(productId)
	return result
}

export const ProductService = {
  createProductIntoDB,
  getAllProductFromDB,
  getAllSearchProductFromDB,
  getSingleData
};
