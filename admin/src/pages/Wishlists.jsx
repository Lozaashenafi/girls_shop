import { useState } from "react";
import {
  Search,
  Filter,
  Eye,
  Heart,
  ShoppingCart,
  TrendingUp,
} from "lucide-react";

// Mock wishlist data
const wishlists = [
  {
    id: 1,
    customer: "Emma Wilson",
    email: "emma@example.com",
    itemCount: 8,
    totalValue: 659.92,
    lastUpdated: "2024-01-15",
    topItem: "Pink Floral Dress",
    avatar:
      "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=40&h=40&fit=crop&crop=face",
  },
  {
    id: 2,
    customer: "Sophia Chen",
    email: "sophia@example.com",
    itemCount: 5,
    totalValue: 379.95,
    lastUpdated: "2024-01-14",
    topItem: "Rose Gold Necklace",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
  },
  {
    id: 3,
    customer: "Isabella Rose",
    email: "isabella@example.com",
    itemCount: 12,
    totalValue: 899.88,
    lastUpdated: "2024-01-13",
    topItem: "Pastel Makeup Kit",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=40&h=40&fit=crop&crop=face",
  },
  {
    id: 4,
    customer: "Olivia Brown",
    email: "olivia@example.com",
    itemCount: 3,
    totalValue: 179.97,
    lastUpdated: "2024-01-12",
    topItem: "Cute Cat Bag",
    avatar:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=40&h=40&fit=crop&crop=face",
  },
];

// Mock popular wishlist items
const popularItems = [
  {
    id: 1,
    name: "Pink Floral Dress",
    price: 89.99,
    wishlisted: 45,
    category: "Dresses",
    image:
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=60&h=60&fit=crop&crop=center",
  },
  {
    id: 2,
    name: "Rose Gold Necklace",
    price: 129.99,
    wishlisted: 38,
    category: "Jewelry",
    image:
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=60&h=60&fit=crop&crop=center",
  },
  {
    id: 3,
    name: "Pastel Makeup Kit",
    price: 79.99,
    wishlisted: 32,
    category: "Beauty",
    image:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=60&h=60&fit=crop&crop=center",
  },
];

export default function Wishlists() {
  const [search, setSearch] = useState("");

  return (
    <div className="p-6 space-y-6  dark:bg-gray-900 min-h-screen text-gray-900 dark:text-gray-100">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
            Wishlists
          </h1>
          <p className="mt-1 text-gray-600 dark:text-gray-400">
            Monitor customer preferences and popular products
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-4">
        <div className="flex gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400 w-4 h-4" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search wishlists..."
              className="w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button className="flex items-center px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200">
            <Filter className="w-4 h-4 mr-2" /> Filter
          </button>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Customer Wishlists */}
        <div className="bg-white dark:bg-gray-800 shadow rounded-lg">
          <div className="border-b border-gray-200 dark:border-gray-700 p-4">
            <h2 className="flex items-center gap-2 font-semibold">
              <Heart className="w-5 h-5 text-red-500" /> Customer Wishlists
            </h2>
          </div>
          <div className="p-4 space-y-4">
            {wishlists.map((wishlist) => (
              <div
                key={wishlist.id}
                className="flex items-center justify-between p-3 rounded-lg bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={wishlist.avatar}
                    alt={wishlist.customer}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-sm">{wishlist.customer}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {wishlist.email}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      Top item: {wishlist.topItem}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium">
                    {wishlist.itemCount} items
                  </p>
                  <p className="text-sm font-bold text-blue-600 dark:text-blue-400">
                    ${wishlist.totalValue}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {wishlist.lastUpdated}
                  </p>
                </div>
                <button className="ml-2 flex items-center px-3 py-1 border border-gray-300 dark:border-gray-600 rounded-md text-sm bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700">
                  <Eye className="w-3 h-3 mr-1" /> View
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Popular Wishlist Items */}
        <div className="bg-white dark:bg-gray-800 shadow rounded-lg">
          <div className="border-b border-gray-200 dark:border-gray-700 p-4">
            <h2 className="flex items-center gap-2 font-semibold">
              <TrendingUp className="w-5 h-5 text-green-500" /> Most Wishlisted
              Items
            </h2>
          </div>
          <div className="p-4 space-y-4">
            {popularItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between p-3 rounded-lg bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg overflow-hidden bg-gray-200 dark:bg-gray-600">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{item.name}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {item.category}
                    </p>
                    <div className="flex items-center gap-2 mt-1">
                      <Heart className="w-3 h-3 text-red-500 fill-red-500" />
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        {item.wishlisted} times
                      </span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold text-blue-600 dark:text-blue-400">
                    ${item.price}
                  </p>
                  <button className="mt-1 flex items-center px-3 py-1 border border-gray-300 dark:border-gray-600 rounded-md text-sm bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700">
                    <ShoppingCart className="w-3 h-3 mr-1" /> Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Wishlist Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-4 flex items-center gap-3">
          <div className="w-10 h-10 bg-red-500 rounded-lg flex items-center justify-center">
            <Heart className="w-5 h-5 text-white" />
          </div>
          <div>
            <p className="text-2xl font-bold">1,456</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Total Wishlists
            </p>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-4 flex items-center gap-3">
          <div className="w-10 h-10 bg-pink-500 rounded-lg flex items-center justify-center">
            <Heart className="w-5 h-5 text-white" />
          </div>
          <div>
            <p className="text-2xl font-bold">8,734</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Total Items
            </p>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-4 flex items-center gap-3">
          <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
            <ShoppingCart className="w-5 h-5 text-white" />
          </div>
          <div>
            <p className="text-2xl font-bold">23%</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Conversion Rate
            </p>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-4 flex items-center gap-3">
          <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center">
            <TrendingUp className="w-5 h-5 text-white" />
          </div>
          <div>
            <p className="text-2xl font-bold">$123,456</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Potential Revenue
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
