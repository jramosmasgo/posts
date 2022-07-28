import Response from "../core/class/Response.js";
import {
  createCategoryService,
  getAllCategoriesService,
  updateCategoryService,
} from "../services/category.services.js";

export const createCategoryController = async (req, res, next) => {
  try {
    const result = await createCategoryService(req.body);
    new Response(res).createResponse({
      message: "category created",
      data: result,
      code: 201,
    });
  } catch (error) {
    next(error);
  }
};

export const getAllCategoriesController = async (_req, res, next) => {
  try {
    const result = await getAllCategoriesService();
    new Response(res).createResponse({
      message: "list categories",
      data: result,
      code: 200,
    });
  } catch (error) {
    next(error);
  }
};

export const updateCategoryController = async (req, res, next) => {
  try {
    const idCategory = req.params.id;
    const result = await updateCategoryService(idCategory, req.body);
    new Response(res).createResponse({
      message: "category updated",
      data: result,
      code: 200,
    });
  } catch (error) {
    next(error);
  }
};
