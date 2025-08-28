// src/pages/AddCategory.jsx
import React, { useState } from "react";
import { Plus } from "lucide-react";
import categoryService from "../services/categoryService";
import { useNavigate } from "react-router-dom";

export default function AddCategory() {
  const [formData, setFormData] = useState({
    categoryName: "",
    description: "",
    imageUrl: null,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    if (!formData.categoryName || !formData.description || !formData.imageUrl) {
      setError("Please fill out all fields.");
      setLoading(false);
      return;
    }

    const data = new FormData();
    data.append("categoryName", formData.categoryName);
    data.append("description", formData.description);
    data.append("imageUrl", formData.imageUrl);

    const res = await categoryService.addCategory(data);

    if (res.success) {
      setSuccess("Category added successfully!");
      // Redirect to the categories page after a short delay
      setTimeout(() => {
        navigate("/categories");
      }, 1500);
    } else {
      setError(res.message);
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen text-gray-900 dark:bg-gray-950 dark:text-gray-100">
      <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
            Add New Category
          </h1>
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
            Create a new product category with a name, description, and image.
          </p>
        </div>
        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-gray-200 bg-white/80 p-6 shadow-sm backdrop-blur sm:p-8 dark:border-gray-800 dark:bg-gray-900/80"
        >
          <div className="grid gap-6">
            {/* Category Name */}
            <div>
              <label
                htmlFor="categoryName"
                className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Category Name
              </label>
              <input
                type="text"
                id="categoryName"
                name="categoryName"
                value={formData.categoryName}
                onChange={handleChange}
                className="w-full rounded-xl border border-gray-300 bg-white px-4 py-2 text-sm outline-none transition placeholder:text-gray-400 focus:border-pink-500 focus:ring-2 focus:ring-pink-500 dark:border-gray-700 dark:bg-gray-950"
                placeholder="e.g., Electronics, Fashion"
                required
              />
            </div>

            <div>
              <label
                htmlFor="description"
                className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Description
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows="4"
                className="w-full rounded-xl border border-gray-300 bg-white px-4 py-2 text-sm outline-none transition placeholder:text-gray-400 focus:border-pink-500 focus:ring-2 focus:ring-pink-500 dark:border-gray-700 dark:bg-gray-950"
                placeholder="A brief description of the category."
                required
              ></textarea>
            </div>

            {/* Image Upload */}
            <div>
              <label
                htmlFor="imageUrl"
                className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Category Image
              </label>
              <input
                type="file"
                id="imageUrl"
                name="imageUrl"
                onChange={handleChange}
                accept="image/*"
                className="block w-full text-sm text-gray-500 file:mr-4 file:rounded-xl file:border-0 file:bg-gray-50 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-gray-700 hover:file:bg-gray-100 focus:outline-none dark:text-gray-400 dark:file:bg-gray-700 dark:file:text-gray-200 dark:hover:file:bg-gray-600"
                required
              />
            </div>
          </div>

          {/* Messages */}
          {loading && (
            <p className="mt-4 text-center text-sm text-pink-500">
              Adding category...
            </p>
          )}
          {error && (
            <p className="mt-4 text-center text-sm text-red-500">{error}</p>
          )}
          {success && (
            <p className="mt-4 text-center text-sm text-green-500">{success}</p>
          )}

          {/* Submit Button */}
          <div className="mt-6 flex justify-end">
            <button
              type="submit"
              disabled={loading}
              className={`inline-flex items-center gap-2 rounded-xl px-6 py-2 text-sm font-medium text-white shadow-sm transition focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-950 ${
                loading
                  ? "cursor-not-allowed bg-gray-400"
                  : "bg-pink-600 hover:bg-pink-700 focus:ring-pink-500"
              }`}
            >
              {loading ? (
                <>
                  <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                  Adding...
                </>
              ) : (
                <>
                  <Plus className="h-4 w-4" /> Add Category
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
