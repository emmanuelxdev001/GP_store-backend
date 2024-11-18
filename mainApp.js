"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mainApp = void 0;
const sellerRouter_1 = __importDefault(require("./Router/sellerRouter"));
const productRouter_1 = __importDefault(require("./Router/productRouter"));
const mainApp = (app) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        app.use("/api", sellerRouter_1.default);
        app.use("/api", productRouter_1.default);
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
});
exports.mainApp = mainApp;
