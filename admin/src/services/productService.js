import axios from "axios";

const productService = {
  getAllProducts: async () => {
    try {
      const response = await axios.get("/api/products");
      return response.data;
    } catch (error) {
      console.error("Error fetching products:", error);
      throw error;
    }
  },
  getProductById: async (id) => {
    try {
      const response = await axios.get(`/api/products/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching product with id ${id}:`, error);
      throw error;
    }
  },
  createProduct: async (productData) => {
    try {
      const response = await axios.post("/api/products", productData);
      return response.data;
    } catch (error) {
      console.error("Error creating product:", error);
      throw error;
    }
  },
  updateProduct: async (id, productData) => {
    try {
      const response = await axios.put(`/api/products/${id}`, productData);
      return response.data;
    } catch (error) {
      console.error(`Error updating product with id ${id}:`, error);
      throw error;
    }
  },
  deleteProduct: async (id) => {
    try {
      const response = await axios.delete(`/api/products/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error deleting product with id ${id}:`, error);
      throw error;
    }
  },
};

export default productService;
