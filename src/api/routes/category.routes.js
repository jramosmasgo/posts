import { Router } from "express";
import {
  createCategoryController,
  getAllCategoriesController,
  updateCategoryController,
} from "../controllers/category.controller.js";

const router = Router();

router.get("/category", getAllCategoriesController);

router.post("/category", createCategoryController);

router.put("/category/:id", updateCategoryController);

export default router;
