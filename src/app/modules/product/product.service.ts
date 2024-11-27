import mongoose from 'mongoose';
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
const getSingleProduct = async (productId: string) => {
  const result = await ProductModel.findById(productId);
  return result;
};

//update product data
const updateProductData = async (
  productId: string,
  updateData: Partial<TProduct>,
) => {
  const result = await ProductModel.findByIdAndUpdate(
    productId,
    { $set: updateData },
    { new: true, runValidators: true },
  );
  return result
};

//delete product data
const deleteProduct = async (productId: string) => {
  if (!mongoose.Types.ObjectId.isValid(productId)) {
    throw new Error('Invalid product ID'); // Throw an error if the ID is invalid
  }
  const result = await ProductModel.findOneAndDelete({ _id: productId });
  return result;
};

export const ProductService = {
  createProductIntoDB,
  getAllProductFromDB,
  getAllSearchProductFromDB,
  getSingleProduct,
  updateProductData,
  deleteProduct
};
