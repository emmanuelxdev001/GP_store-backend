import express from "express";
import authRouter from "./authRouter";
import sellerRouter from "./sellerRouter";
import productRouter from "./productRouter"

const router = express.Router();

// Mounting each router under a specific route
router.use("/api/auth", authRouter); 
router.use("/api/sellers", sellerRouter);
router.use.("/api/products", productRouter);
// H/productRouterute for the API
router.get("/health", (req, res) => {
  res.status(200).json({ message: "API is running" });
});

export default router;
