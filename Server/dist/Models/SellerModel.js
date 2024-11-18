import { model, Schema, Types } from "mongoose";
const sellerModel = new Schema({
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
}, { timestamps: true });
export default model("sellers", sellerModel);
