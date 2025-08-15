import React from "react";
const ProductCard = ({ product }) => {
  return (
    <div className="group bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl font-inter">
      <div className="relative">
        <img
          className="w-full h-48 object-cover object-center"
          src={product.imageUrl}
          alt={product.name}
        />
        {product.discount && (
          <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
            {product.discount} OFF
          </span>
        )}
      </div>
      <div className="p-4 text-center">
        <h3 className="text-lg font-semibold text-gray-800 mt-2">
          {product.name}
        </h3>
        <p className="text-sm text-gray-500">{product.category}</p>
        <div className="flex items-center justify-center mt-3">
          <span className="text-lg font-bold text-gray-900">
            ${product.discountedPrice}
          </span>
          {product.originalPrice && (
            <span className="ml-2 text-sm text-gray-500 line-through">
              ${product.originalPrice}
            </span>
          )}
        </div>
        <div className="mt-4 text-sm text-gray-600 flex items-center justify-center">
          <svg
            className="w-4 h-4 mr-1 text-yellow-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.683-1.538 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.783.565-1.838-.197-1.538-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69L9.049 2.927z"></path>
          </svg>
          {product.rating
            ? `${product.rating} (${product.reviews})`
            : "No reviews"}
        </div>
        {product.buttonText && (
          <button className="mt-4 px-4 py-2 bg-green-600 text-white text-sm font-semibold rounded-md shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
            {product.buttonText}
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
