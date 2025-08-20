import React from "react";
import { Plus, Search, Filter, Edit, Trash2, Eye, Package } from "lucide-react";

// Mock product data
const products = [
  {
    id: 1,
    name: "Pink Floral Dress",
    category: "Dresses",
    price: 89.99,
    stock: 25,
    status: "Active",
    image:
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=100&h=100&fit=crop&crop=center",
  },
  {
    id: 2,
    name: "Rose Gold Necklace",
    category: "Jewelry",
    price: 129.99,
    stock: 15,
    status: "Active",
    image:
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=100&h=100&fit=crop&crop=center",
  },
  {
    id: 3,
    name: "Pastel Makeup Kit",
    category: "Beauty",
    price: 79.99,
    stock: 8,
    status: "Low Stock",
    image:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=100&h=100&fit=crop&crop=center",
  },
  {
    id: 4,
    name: "Cute Cat Bag",
    category: "Accessories",
    price: 45.99,
    stock: 0,
    status: "Out of Stock",
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=100&h=100&fit=crop&crop=center",
  },
];

export default function Products() {
  return (
    <div className="p-6 font-sans  dark:bg-gray-900 min-h-screen transition-colors">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
            Products
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Manage your product catalog
          </p>
        </div>
        <button className="flex items-center gap-2 bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-lg text-sm shadow transition">
          <Plus size={16} /> Add Product
        </button>
      </div>

      {/* Filters */}
      <div className="mt-6 p-4 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 rounded-lg">
        <div className="flex gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-gray-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search products..."
              className="w-full pl-9 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-pink-500 dark:bg-gray-700 dark:text-white"
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 text-sm text-gray-700 dark:text-gray-200 transition">
            <Filter size={16} /> Filter
          </button>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid gap-6 mt-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition"
          >
            {/* Product Image */}
            <div className="aspect-square rounded-md overflow-hidden bg-gray-100 dark:bg-gray-700 mb-3">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Product Info */}
            <div className="flex justify-between items-center">
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
                {product.name}
              </h3>
              <span
                className={`text-xs px-2 py-1 rounded-full ${
                  product.status === "Active"
                    ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                    : product.status === "Low Stock"
                    ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                    : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
                }`}
              >
                {product.status}
              </span>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              {product.category}
            </p>

            {/* Price & Stock */}
            <div className="flex justify-between items-center mt-2">
              <span className="text-pink-600 font-bold">
                ${product.price.toFixed(2)}
              </span>
              <span className="text-xs text-gray-600 dark:text-gray-400">
                Stock: {product.stock}
              </span>
            </div>

            {/* Actions */}
            <div className="flex gap-2 mt-3">
              <button className="flex-1 flex items-center justify-center gap-1 border border-gray-200 dark:border-gray-600 rounded-lg py-1 text-xs text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition">
                <Eye size={14} /> View
              </button>
              <button className="flex-1 flex items-center justify-center gap-1 border border-gray-200 dark:border-gray-600 rounded-lg py-1 text-xs text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition">
                <Edit size={14} /> Edit
              </button>
              <button className="flex items-center justify-center border border-red-500 text-red-500 hover:bg-red-50 dark:hover:bg-red-900 rounded-lg px-2 py-1 transition">
                <Trash2 size={14} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Stats */}
      <div className="grid gap-6 mt-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex items-center gap-3 border border-gray-200 dark:border-gray-700 rounded-lg p-4 bg-white dark:bg-gray-800">
          <div className="bg-pink-600 p-2 rounded-md">
            <Package size={20} color="white" />
          </div>
          <div>
            <p className="text-xl font-bold text-gray-900 dark:text-white">
              1,234
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Total Products
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 border border-gray-200 dark:border-gray-700 rounded-lg p-4 bg-white dark:bg-gray-800">
          <div className="bg-green-600 p-2 rounded-md">
            <Package size={20} color="white" />
          </div>
          <div>
            <p className="text-xl font-bold text-gray-900 dark:text-white">
              987
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">In Stock</p>
          </div>
        </div>

        <div className="flex items-center gap-3 border border-gray-200 dark:border-gray-700 rounded-lg p-4 bg-white dark:bg-gray-800">
          <div className="bg-yellow-500 p-2 rounded-md">
            <Package size={20} color="white" />
          </div>
          <div>
            <p className="text-xl font-bold text-gray-900 dark:text-white">
              156
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Low Stock
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 border border-gray-200 dark:border-gray-700 rounded-lg p-4 bg-white dark:bg-gray-800">
          <div className="bg-red-600 p-2 rounded-md">
            <Package size={20} color="white" />
          </div>
          <div>
            <p className="text-xl font-bold text-gray-900 dark:text-white">
              91
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Out of Stock
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
