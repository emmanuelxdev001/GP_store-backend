import { Request, Response } from "express";
import { Types } from "mongoose";
import productModel from "../Models/ProductModel";
import SellerModel from "../Models/SellerModel";

export const createProduct = async (req: Request, res: Response) => {
  try {
    const { productName, productDetail, productPrice, productQTY, category } =
      req.body;
    const { sellerID } = req.params;

    const seller = await SellerModel.findById(sellerID);

    if (seller && seller.status === "seller") {
      const product: any = await productModel.create({
        productName,
        productDetail,
        productPrice,
        productQTY,
        category,
        sellerID,
      });

      seller.sellerProduct.push(new Types.ObjectId(product?._id));
      seller.save();

      return res.status(201).json({
        message: "product created",
        data: product,
        status: 201,
      });
    } else {
      return res.status(404).json({
        message: "You are unauthorized for this action",
      });
    }
  } catch (error: any) {
    return res.status(404).json({
      message: "Error creating product",
      data: error.message,
    });
  }
};

export const getAllProduct = async (req: Request, res: Response) => {
  try {
    const products = await productModel.find();

    return res.status(200).json({
      message: "products found",
      data: products,
      status: 201,
    });
  } catch (error) {
    res.status(404).json({
      message: "Error getting all products",
    });
  }
};

export const getSellerProduct = async (req: Request, res: Response) => {
  try {
    const { sellerID } = req.params;

    const products = await SellerModel.findById(sellerID).populate({
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
  } catch (error) {
    res.status(404).json({
      message: "Error getting all products",
    });
  }
};
