import bcrypt from "bcrypt";
import crypto from "crypto";
import SellerModel from "../Models/SellerModel";
export const createSeller = async (req, res) => {
    try {
        const { email, password, userName, storeName } = req.body;
        const salt = await bcrypt.genSalt(10);
        const hashed = await bcrypt.hash(password, salt);
        const token = crypto.randomBytes(3).toString("hex");
        const user = await SellerModel.create({
            email,
            password: hashed,
            userName,
            storeName,
            platformID: token,
            status: "seller",
        });
        return res.status(201).json({
            message: "seller created",
            data: user,
            status: 201,
        });
    }
    catch (error) {
        return res.status(404).json({
            message: "Error creating",
        });
    }
};
export const createDispatcher = async (req, res) => {
    try {
        const { email, password, userName, storeName } = req.body;
        const salt = await bcrypt.genSalt(10);
        const hashed = await bcrypt.hash(password, salt);
        const token = crypto.randomBytes(3).toString("hex");
        const user = await SellerModel.create({
            email,
            password: hashed,
            userName,
            storeName,
            platformID: token,
            status: "dispatcher",
        });
        return res.status(201).json({
            message: "Dispatcher created",
            data: user,
            status: 201,
        });
    }
    catch (error) {
        return res.status(404).json({
            message: "Error creating",
        });
    }
};
export const signIn = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await SellerModel.findOne({
            email,
        });
        if (user) {
            const pass = await bcrypt.compare(password, user?.password);
            if (pass) {
                return res.status(201).json({
                    message: "Welcome back",
                    data: user,
                    status: 201,
                });
            }
            else {
                return res.status(404).json({
                    message: "password is not correct",
                });
            }
        }
        else {
            return res.status(404).json({
                message: "Email not found",
            });
        }
    }
    catch (error) {
        return res.status(404).json({
            message: "Error creating",
        });
    }
};
