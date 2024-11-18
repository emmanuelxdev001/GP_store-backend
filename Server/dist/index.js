import express from "express";
import env from "dotenv";
import cors from "cors";
import { dbConfig } from "./utils/dbConfig";
import { mainApp } from "./mainApp";
env.config();
const port = parseInt(process.env.PORT);
const app = express();
app.use(express.json());
app.use(cors());
mainApp(app);
app.listen(port, () => {
    dbConfig();
});
