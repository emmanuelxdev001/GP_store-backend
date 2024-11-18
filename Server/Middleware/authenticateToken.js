"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const SECRET_KEY = process.env.JWT_SECRET_KEY || 'your_secret_key';
const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) {
        res.status(401).json({ message: 'Access Denied: No token provided' });
        return; // Ensure middleware returns void
    }
    jsonwebtoken_1.default.verify(token, SECRET_KEY, (err, user) => {
        if (err) {
            res.status(403).json({ message: 'Invalid token' });
            return; // Ensure middleware returns void
        }
        req.user = user; // Attach the user to the request object
        next(); // Call the next middleware
    });
};
exports.default = authenticateToken;
