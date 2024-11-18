import { Application, Request, Response } from "express";
import seller from "./Server/Router/sellerRouter";
import product from "./Server/Router/productRouter";
export const mainApp = async (app: Application) => {
  try {
    app.use("/api", seller);
    app.use("/api", product);

    app.use("/", (req: Request, res: Response) => {
      try {
        res.json({
          message: "Welcome to the defaut API",
        });
      } catch (error) {
        res.status(404).json({ message: "Error read path" });
      }
    });
  } catch (error) {
    return error;
  }
};
