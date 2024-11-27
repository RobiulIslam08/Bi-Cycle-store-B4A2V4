
import { Schema, model } from 'mongoose';
import { TProduct } from './product.interface';

//create schema
const productSchema = new Schema<TProduct>(
	{
		name: {
		  type: String,
		  required: [true, 'Name Is Require'],
		},
		brand: {
		  type: String,
		  required: [true, 'Brand Is Required'],
		},
		price: {
		  type: Number,
		  min: [0, 'Price must be a positive number'],
		  required: [true, 'Price Is Required'],
		},
		type: {
		  type: String,
		  enum: ['Mountain', 'Road', 'Hybrid', 'BMX', 'Electric'],
		  required: [true, 'Product type is required'],
		},
		description: {
		  type: String,
		  required: [true, 'Description Is Required'],
		},
		quantity: {
		  type: Number,
		  required: [true, 'Quantity Is Required'],
		  min: [0, 'Quantity must be a positive number'],
		},
		inStock: {
		  type: Boolean,
		  required: true,
		},
	  },
	  { timestamps: true, versionKey: false },	
);
export const ProductModel = model<TProduct>('Product',productSchema)