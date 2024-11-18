"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const sellerModel = new mongoose_1.Schema({
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
            type: mongoose_1.Types.ObjectId,
            ref: "products",
        },
    ],
    dispatchProduct: [
        {
            type: mongoose_1.Types.ObjectId,
            ref: "products",
        },
    ],
}, { timestamps: true });
exports.default = (0, mongoose_1.model)("sellers", sellerModel);
