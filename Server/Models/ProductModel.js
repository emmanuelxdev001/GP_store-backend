"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const productModel = new mongoose_1.Schema({
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
        type: mongoose_1.Types.ObjectId,
        ref: "sellers",
    },
}, { timestamps: true });
exports.default = (0, mongoose_1.model)("products", productModel);
