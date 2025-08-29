// src/services/categoryService.js
import api from "../util/axios";

const categoryService = {
  getCategories: async () => {
    try {
      const response = await api.get("/categories");
      console.log("Fetched categories:", response.data);
      return {
        success: true,
        categories: response.data,
      };
    } catch (error) {
      console.error("Error fetching categories:", error);
      return {
        success: false,
        message: error.response?.data?.message || "Failed to fetch categories",
      };
    }
  },
  addCategory: async (categoryData) => {
    try {
      console.log("Adding category with data:", categoryData);
      const response = await api.post("/categories", categoryData, {
        // headers: { "Content-Type": "multipart/form-data" }, // 👈 important
      });
      console.log("Added category:", response.data);
      return {
        success: true,
        category: response.data,
      };
    } catch (error) {
      console.error("Error adding category:", error);
      return {
        success: false,
        message: error.response?.data?.message || "Failed to add category",
      };
    }
  },
};

export default categoryService;
