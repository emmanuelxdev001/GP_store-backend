import seller from "./Router/sellerRouter";
import product from "./Router/productRouter";
export const mainApp = async (app) => {
    try {
        app.use("/api", seller);
        app.use("/api", product);
        app.use("/", (req, res) => {
            try {
                res.json({
                    message: "Welcome to the defaut API",
                });
            }
            catch (error) {
                res.status(404).json({ message: "Error read path" });
            }
        });
    }
    catch (error) {
        return error;
    }
};
