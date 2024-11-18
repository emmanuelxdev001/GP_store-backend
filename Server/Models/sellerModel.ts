import { Document, model, Schema, Types } from "mongoose";

interface iSeller {
  email: string;
  password: string;
  platformID: string;
  userName: string;
  storeName: string;
  status: string;

  sellerProduct: Array<{}>;
  dispatchProduct: Array<{}>;
}

interface iSellerData extends iSeller, Document {}

const sellerModel = new Schema<iSellerData>(
  {
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
    },
    status: {
      type: String,
    },
    platformID: {
      type: String,
    },
    userName: {
      type: String,
    },
    storeName: {
      type: String,
    },

    sellerProduct: [
      {
        type: Types.ObjectId,
        ref: "products",
      },
    ],

    dispatchProduct: [
      {
        type: Types.ObjectId,
        ref: "products",
      },
    ],
  },
  { timestamps: true }
);

export default model<iSellerData>("sellers", sellerModel);
