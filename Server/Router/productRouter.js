"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productController_1 = require("../Controller/productController");
const ProductRouter = (0, express_1.Router)();
router.route("/create-product/:sellerID").post(productController_1.createProduct);
router.route("/get-seller-product/:sellerID").get(productController_1.getSellerProduct);
router.route("/get-all-product").get(productController_1.getAllProduct);
exports.default = router;
