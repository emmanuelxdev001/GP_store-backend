import mongoose, { Document, Schema } from 'mongoose';

interface ICartItem {
  productId: string;
  quantity: number;
}

interface ICart extends Document {
  sellerId: string;
  items: ICartItem[];
}

const CartItemSchema: Schema = new Schema(
  {
    productId: { type: Schema.Types.ObjectId, ref: 'Products', required: true },
    quantity: { type: Number, required: true, default: 1 },
  },
  { _id: false }
);

const CartModel: Schema = new Schema(
  {
    sellerId: { type: Schema.Types.ObjectId, ref: 'Sellers', required: true },
    items: [CartItemSchema],
  },
  { timestamps: true }
);

export const Cart = mongoose.model<ICart>('Cart', CartModel);
