"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authRouter_1 = __importDefault(require("./authRouter"));
const sellerRouter_1 = __importDefault(require("./sellerRouter"));
const productRouter_1 = __importDefault(require("./productRouter"));
const router = express_1.default.Router();
// Mounting each router under a specific route
router.use("/api/auth", authRouter_1.default);
router.use("/api/sellers", sellerRouter_1.default);
router.use.("/api/products", productRouter_1.default);
// H/productRouterute for the API
router.get("/health", (req, res) => {
    res.status(200).json({ message: "API is running" });
});
exports.default = router;
