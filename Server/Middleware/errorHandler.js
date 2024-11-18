"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Error handling middleware
const errorHandler = (err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(statusCode).json(Object.assign({ status: "error", message }, (process.env.NODE_ENV === "development" && { stack: err.stack })));
};
exports.default = errorHandler;
