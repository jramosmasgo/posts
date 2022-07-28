import {
  createCategoryData,
  getAllCategoriesData,
  updateCategoryData,
} from "../data/category/category.data.js";

export const createCategoryService = async (dataCategory) =>
  createCategoryData(dataCategory);

export const updateCategoryService = async (idCategory, dataCategory) =>
  updateCategoryData(idCategory, dataCategory);

export const getAllCategoriesService = async () => getAllCategoriesData();
