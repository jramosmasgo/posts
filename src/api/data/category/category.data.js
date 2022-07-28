import ApplicationError from "../../core/class/Error.js";
import categoryModel from "../../models/category.model.js";

export const createCategoryData = async (dataCategory) => {
  try {
    return categoryModel.create(dataCategory);
  } catch (error) {
    throw new ApplicationError(error.message, 400, "creation category");
  }
};

export const getAllCategoriesData = async () => {
  try {
    return categoryModel.find();
  } catch (error) {
    throw new ApplicationError(error.message, 400, "list categories");
  }
};

export const updateCategoryData = async (idCategory, dataCategory) => {
  try {
    return categoryModel.updateOne({ _id: idCategory }, dataCategory, {
      new: true,
    });
  } catch (error) {
    throw new ApplicationError(error.message, 400, "update category");
  }
};
