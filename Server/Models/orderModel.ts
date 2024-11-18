import mongoose, { Document, Schema } from 'mongoose';

interface IOrderItem {
  productId: string;
  quantity: number;
}

interface IOrder extends Document {
  userId: string;
  items: IOrderItem[];
  totalAmount: number;
  status: string;
}

const OrderItemSchema: Schema = new Schema(
  {
    productId: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
    quantity: { type: Number, required: true },
  },
  { _id: false }
);

const OrderModel: Schema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    items: [OrderItemSchema],
    totalAmount: { type: Number, required: true },
    status: { type: String, default: 'Pending' },
  },
  { timestamps: true }
);

export const Order = mongoose.model<IOrder>('Order', OrderModel);
