
import { ProductModel } from "../product/product.model";
import { TOrder } from "./order.interface";
import { OrderModel } from "./order.model";

const createOrderIntoDB = async (orderData: TOrder) => {
  // Fetch product details
  const product = await ProductModel.findById(orderData.product);
  
  // If product is not found, throw an error
  if (!product) throw new Error('Product Not Found');

  // Calculate the total price of the order
  const totalPrice = product.price * orderData.quantity;

  // Create the order
  const order = await OrderModel.create({ ...orderData, totalPrice });

  // Update product inventory if the order is successfully created
  if (order) {
    const updatedQuantity = product.quantity - orderData.quantity;
    const inStock = updatedQuantity > 0;

    await ProductModel.findByIdAndUpdate(orderData.product, {
      quantity: updatedQuantity,
      inStock,
    }, { new: true });
  }

  return order;
};

export const OrderService = {
  createOrderIntoDB,
};
