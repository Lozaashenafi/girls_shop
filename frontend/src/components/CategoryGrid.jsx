import React from "react";

const CategoryGrid = () => {
  const categories = [
    {
      name: "Men",
      imageUrl: "https://placehold.co/100x100/A3E635/FFFFFF?text=Men",
    },
    {
      name: "Women",
      imageUrl: "https://placehold.co/100x100/FACC15/FFFFFF?text=Women",
    },
    {
      name: "Watches",
      imageUrl: "https://placehold.co/100x100/60A5FA/FFFFFF?text=Watches",
    },
    {
      name: "Bags & Back...",
      imageUrl: "https://placehold.co/100x100/F472B6/FFFFFF?text=Bags",
    },
    {
      name: "Shoes",
      imageUrl: "https://placehold.co/100x100/818CF8/FFFFFF?text=Shoes",
    },
    {
      name: "Accessories",
      imageUrl: "https://placehold.co/100x100/FB923C/FFFFFF?text=Accs",
    },
    {
      name: "Sports",
      imageUrl: "https://placehold.co/100x100/10B981/FFFFFF?text=Sports",
    },
    {
      name: "Kids",
      imageUrl: "https://placehold.co/100x100/E879F9/FFFFFF?text=Kids",
    },
    {
      name: "Jewellery",
      imageUrl: "https://placehold.co/100x100/EF4444/FFFFFF?text=Jewel",
    },
    {
      name: "Beauty & Co...",
      imageUrl: "https://placehold.co/100x100/6B7280/FFFFFF?text=Beauty",
    },
  ];

  return (
    <section className="py-8 bg-white font-inter">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-6">
          Browse Categories
        </h2>
        <div className="flex overflow-x-auto scrollbar-hide space-x-6 pb-4">
          {categories.map((category, index) => (
            <div key={index} className="flex-shrink-0 w-28 text-center">
              <div className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center mx-auto overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                <img
                  src={category.imageUrl}
                  alt={category.name}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <p className="mt-2 text-sm font-medium text-gray-700">
                {category.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;
