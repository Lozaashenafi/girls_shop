import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import CategoryGrid from "../components/CategoryGrid";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const dealsOfTheDayProducts = [
    {
      imageUrl: "https://placehold.co/300x300/F0F9FF/1F2937?text=Backpack",
      name: "Ten Solid Laptop Backpack",
      category: "Backpacks",
      originalPrice: "185.00",
      discountedPrice: "149.00",
      discount: "20%",
      rating: 4.5,
      reviews: 120,
      buttonText: "Add to Cart",
    },
    {
      imageUrl: "https://placehold.co/300x300/ECFDF5/047857?text=Smartwatch",
      name: "Brown G Explorist HR Leather...",
      category: "Smartwatch",
      originalPrice: "2,000.00",
      discountedPrice: "1,699.00",
      discount: "15%",
      rating: 4.0,
      reviews: 90,
      buttonText: "Add to Cart",
    },
    {
      imageUrl: "https://placehold.co/300x300/F0F9FF/1F2937?text=Bag",
      name: "Brown Solid Laptop Bag",
      category: "Bags",
      originalPrice: "130.00",
      discountedPrice: "99.00",
      discount: "25%",
      rating: 5.0,
      reviews: 200,
      buttonText: "Add to Cart",
    },
    {
      imageUrl: "https://placehold.co/300x300/ECFDF5/047857?text=Belt",
      name: "Brown Solid Leather Belt",
      category: "Accessories",
      originalPrice: "110.00",
      discountedPrice: "95.00",
      discount: "10%",
      rating: 4.2,
      reviews: 50,
      buttonText: "Add to Cart",
    },
    {
      imageUrl: "https://placehold.co/300x300/F0F9FF/1F2937?text=Dress",
      name: "Burgundy Solid Wrap Dress",
      category: "Dresses & Tops",
      originalPrice: "115.00",
      discountedPrice: "95.00",
      discount: "17%",
      rating: 4.8,
      reviews: 150,
      buttonText: "Add to Cart",
    },
  ];

  const fashionProducts = [
    {
      imageUrl: "https://placehold.co/300x300/ECFDF5/047857?text=Jacket",
      name: "Brown Solid Biker Jacket",
      category: "Jackets",
      originalPrice: "120.00",
      discountedPrice: "110.00",
      discount: "8%",
      rating: 4.5,
      reviews: 120,
      buttonText: "Add to Cart",
    },
    {
      imageUrl: "https://placehold.co/300x300/F0F9FF/1F2937?text=Sneakers",
      name: "Men Brown Solid Mid-Top R...",
      category: "Casual Shoes, Sneakers",
      originalPrice: "150.00",
      discountedPrice: "115.00",
      discount: "23%",
      rating: 4.0,
      reviews: 90,
      buttonText: "Add to Cart",
    },
    {
      imageUrl: "https://placehold.co/300x300/ECFDF5/047857?text=Dress",
      name: "Petite Olive Green Solid Top",
      category: "Dresses & Tops",
      originalPrice: "50.00",
      discountedPrice: "39.00",
      discount: "22%",
      rating: 5.0,
      reviews: 200,
      buttonText: "Add to Cart",
    },
    {
      imageUrl: "https://placehold.co/300x300/F0F9FF/1F2937?text=Handbag",
      name: "Brown Solid Laptop Bag",
      category: "Handbags, Messenger Bag",
      originalPrice: "120.00",
      discountedPrice: "99.00",
      discount: "17%",
      rating: 4.2,
      reviews: 50,
      buttonText: "Add to Cart",
    },
    {
      imageUrl: "https://placehold.co/300x300/ECFDF5/047857?text=Backpack",
      name: "Ten Solid Laptop Backpack",
      category: "Backpacks",
      originalPrice: "185.00",
      discountedPrice: "149.00",
      discount: "20%",
      rating: 4.5,
      reviews: 120,
      buttonText: "Add to Cart",
    },
  ];

  const featuredSections = [
    {
      title: "Sunglasses",
      description: "Min. 45-80% Off",
      imageUrl: "https://placehold.co/600x400/1F2937/F3F4F6?text=Sunglasses",
      linkText: "Shop Now",
    },
    {
      title: "Footwear",
      description: "Up to 75% Off",
      imageUrl: "https://placehold.co/600x400/374151/F9FAFB?text=Footwear",
      linkText: "Shop Now",
    },
    {
      title: "Accessories",
      description: "Min. 45% Off",
      imageUrl: "https://placehold.co/600x400/4B5563/F9FAFB?text=Accessories",
      linkText: "Shop Now",
    },
  ];

  const [activeTab, setActiveTab] = React.useState("New Arrival");

  return (
    <>
      <main>
        <Hero />

        <CategoryGrid />

        {/* Deals of the Day Section */}
        <section className="py-12 bg-gray-50 font-inter">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">
              Deals Of The Day
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {dealsOfTheDayProducts.map((product, index) => (
                <ProductCard key={index} product={product} />
              ))}
            </div>
          </div>
        </section>

        {/* Featured Sections (Sunglasses, Footwear, Accessories) */}
        <section className="py-12 bg-white font-inter">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featuredSections.map((section, index) => (
                <div
                  key={index}
                  className="relative rounded-lg overflow-hidden shadow-lg group"
                >
                  <img
                    src={section.imageUrl}
                    alt={section.title}
                    className="w-full h-64 object-cover transform transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-white p-4">
                    <h3 className="text-2xl font-bold">{section.title}</h3>
                    <p className="mt-2 text-lg">{section.description}</p>
                    <a
                      href="#"
                      className="mt-4 inline-block bg-green-600 text-white px-6 py-2 rounded-md font-semibold hover:bg-green-700 transition duration-300"
                    >
                      {section.linkText} &gt;
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Fashion Products Section */}
        <section className="py-12 bg-gray-50 font-inter">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">
              Fashion Products
            </h2>
            {/* Tabs for New Arrival, Best Selling, Top Rated */}
            <div className="flex justify-center mb-6 space-x-4">
              {["New Arrival", "Best Selling", "Top Rated"].map((tab) => (
                <button
                  key={tab}
                  className={`px-6 py-2 rounded-md font-medium transition-colors duration-200 ${
                    activeTab === tab
                      ? "bg-green-600 text-white shadow-md"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {fashionProducts.map((product, index) => (
                <ProductCard key={index} product={product} />
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Basic Footer (placeholder) */}
      <footer className="bg-gray-800 text-white py-8 mt-12 font-inter">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2023 PressMart. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Home;
