"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSellerProduct = exports.getAllProduct = exports.createProduct = void 0;
const mongoose_1 = require("mongoose");
const ProductModel_1 = __importDefault(require("../Models/ProductModel"));
const SellerModel_1 = __importDefault(require("../Models/SellerModel"));
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productName, productDetail, productPrice, productQTY, category } = req.body;
        const { sellerID } = req.params;
        const seller = yield SellerModel_1.default.findById(sellerID);
        if (seller && seller.status === "seller") {
            const product = yield ProductModel_1.default.create({
                productName,
                productDetail,
                productPrice,
                productQTY,
                category,
                sellerID,
            });
            seller.sellerProduct.push(new mongoose_1.Types.ObjectId(product === null || product === void 0 ? void 0 : product._id));
            seller.save();
            return res.status(201).json({
                message: "product created",
                data: product,
                status: 201,
            });
        }
        else {
            return res.status(404).json({
                message: "You are unauthorized for this action",
            });
        }
    }
    catch (error) {
        return res.status(404).json({
            message: "Error creating product",
            data: error.message,
        });
    }
});
exports.createProduct = createProduct;
const getAllProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const products = yield ProductModel_1.default.find();
        return res.status(200).json({
            message: "products found",
            data: products,
            status: 201,
        });
    }
    catch (error) {
        res.status(404).json({
            message: "Error getting all products",
        });
    }
});
exports.getAllProduct = getAllProduct;
const getSellerProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { sellerID } = req.params;
        const products = yield SellerModel_1.default.findById(sellerID).populate({
            path: "sellerProduct",
            options: {
                sort: {
                    createdAt: -1,
                },
            },
        });
        return res.status(200).json({
            message: "products found",
            data: products,
            status: 201,
        });
    }
    catch (error) {
        res.status(404).json({
            message: "Error getting all products",
        });
    }
});
exports.getSellerProduct = getSellerProduct;
