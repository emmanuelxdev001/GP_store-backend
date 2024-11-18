import { Request, Response, NextFunction } from "express";

// Error handling middleware
const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";

  res.status(statusCode).json({
    status: "error",
    message,
    ...(process.env.NODE_ENV === "development" && { stack: err.stack }), // Include stack trace in development
  });
};

export default errorHandler;
