const Header = () => {
  return (
    <header className="bg-white shadow-sm font-inter">
      {/* Top Bar */}
      <div className="bg-gray-800 text-white text-xs py-2 px-4 flex justify-between items-center flex-wrap">
        <div className="flex items-center space-x-4">
          <span className="flex items-center">
            <svg
              className="w-3 h-3 mr-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 8l7.928-5.5L21 8m-2 13V8m-6 13V8m-6 13V8m-4 0h16a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              ></path>
            </svg>
            support@pressmart.com
          </span>
          <span className="flex items-center">
            <svg
              className="w-3 h-3 mr-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              ></path>
            </svg>
            + (00) 4567 8910
          </span>
        </div>
        <div className="flex items-center space-x-4">
          <span>Welcome to Our Store!</span>
          <span className="border-l border-gray-700 pl-4">English</span>
          <span className="border-l border-gray-700 pl-4">$ Dollar (US)</span>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-900">
          Press<span className="text-green-600">Mart</span>.
        </div>

        {/* Search Bar */}
        <div className="flex w-full md:w-auto md:max-w-xl flex-grow mx-4">
          <div className="relative flex-grow">
            <input
              type="text"
              placeholder="Search for products, categories, sku..."
              className="w-full pl-4 pr-12 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-1 focus:ring-green-500"
            />
            <select className="absolute right-0 top-0 h-full bg-gray-100 border-l border-gray-300 rounded-r-md px-2 text-sm text-gray-700 focus:outline-none">
              <option>All Categories</option>
              <option>Electronics</option>
              <option>Fashion</option>
            </select>
          </div>
          <button className="bg-green-600 text-white px-4 rounded-r-md hover:bg-green-700 flex items-center justify-center">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </button>
        </div>

        {/* User Actions */}
        <div className="flex items-center space-x-4">
          <div className="flex flex-col items-center text-sm text-gray-700 hover:text-green-600 cursor-pointer">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              ></path>
            </svg>
            My Account
          </div>
          <div className="flex flex-col items-center text-sm text-gray-700 hover:text-green-600 cursor-pointer">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 22.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              ></path>
            </svg>
            Wishlist
          </div>
          <div className="flex flex-col items-center text-sm text-gray-700 hover:text-green-600 cursor-pointer relative">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.183 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              ></path>
            </svg>
            <span className="absolute -top-1 -right-1 bg-green-600 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
              2
            </span>
            Cart
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-gray-100 border-t border-b border-gray-200 py-3 font-medium">
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Categories Dropdown */}
          <div className="relative group cursor-pointer">
            <button className="flex items-center bg-green-600 text-white px-4 py-2 rounded-md">
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
              Shopping By Categories
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
            {/* Dropdown content (hidden by default) */}
            <div className="hidden group-hover:block absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
              <a
                href="#"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
              >
                Electronics
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
              >
                Fashion
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
              >
                Home & Kitchen
              </a>
            </div>
          </div>

          {/* Nav Links */}
          <ul className="hidden md:flex space-x-6 text-gray-800">
            <li>
              <a href="#" className="hover:text-green-600">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-600">
                Shop
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-600">
                Pages
              </a>
            </li>
            <li className="relative group cursor-pointer">
              <a href="#" className="hover:text-green-600 flex items-center">
                Blog
                <svg
                  className="w-3 h-3 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </a>
              <div className="hidden group-hover:block absolute left-0 mt-2 w-32 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                >
                  Blog Grid
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                >
                  Blog Details
                </a>
              </div>
            </li>
            <li className="relative group cursor-pointer">
              <a href="#" className="hover:text-green-600 flex items-center">
                Elements
                <svg
                  className="w-3 h-3 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </a>
              <div className="hidden group-hover:block absolute left-0 mt-2 w-32 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                >
                  Typography
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                >
                  Buttons
                </a>
              </div>
            </li>
            <li>
              <a href="#" className="hover:text-green-600">
                Buy
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
