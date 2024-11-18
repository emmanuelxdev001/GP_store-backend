import { model, Schema, Types } from "mongoose";
const productModel = new Schema({
    sellerID: {
        type: String,
    },
    productName: {
        type: String,
    },
    productPrice: {
        type: String,
    },
    productQTY: {
        type: String,
    },
    productDetail: {
        type: String,
    },
    category: {
        type: String,
    },
    seller: {
        type: Types.ObjectId,
        ref: "sellers",
    },
}, { timestamps: true });
export default model("products", productModel);
