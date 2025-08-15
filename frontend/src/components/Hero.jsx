import React from "react";

const Hero = () => {
  return (
    <section className="relative bg-gray-100 py-16 md:py-24 overflow-hidden font-inter">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-left z-10 p-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
            Summer Sale <br className="hidden md:block" /> COLLECTIONS
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-700">
            UPTO <span className="text-green-600 font-bold">65%</span> Off
          </p>
          <div className="mt-8 flex justify-center md:justify-start space-x-4">
            <button className="px-6 py-3 bg-green-600 text-white font-semibold rounded-md shadow-lg hover:bg-green-700 transition duration-300">
              Shop Now
            </button>
            <button className="px-6 py-3 border border-gray-400 text-gray-800 font-semibold rounded-md shadow-sm hover:bg-gray-200 transition duration-300">
              Read More
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="md:w-1/2 mt-8 md:mt-0 relative flex justify-center md:justify-end">
          <img
            src="https://images.unsplash.com/photo-1596752763266-9e96e5e8c1e2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Fashion model with bags"
            className="w-full max-w-lg rounded-xl shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
