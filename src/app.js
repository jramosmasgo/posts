import express from "express";
import dotenv from "dotenv";

dotenv.config();
import categoryRoutes from "./api/routes/category.routes.js";

const app = express();

const port = process.env.PORT || 3000;

app.set("port", port);

app.use(categoryRoutes);

export default app;
