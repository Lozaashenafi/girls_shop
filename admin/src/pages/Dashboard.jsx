import {
  ShoppingBag,
  Users,
  ShoppingCart,
  DollarSign,
  TrendingUp,
  Package,
  Heart,
  Star,
} from "lucide-react";

// Mock data
const dashboardStats = [
  {
    title: "Total Revenue",
    value: "$45,231",
    description: "Total sales this month",
    icon: DollarSign,
  },
  {
    title: "Products",
    value: "1,234",
    description: "Active products",
    icon: ShoppingBag,
  },
  {
    title: "Orders",
    value: "892",
    description: "Orders this month",
    icon: ShoppingCart,
  },
  {
    title: "Customers",
    value: "2,456",
    description: "Registered customers",
    icon: Users,
  },
];

const recentOrders = [
  {
    id: "#3210",
    customer: "Emma Wilson",
    amount: "$129.99",
    status: "Delivered",
  },
  { id: "#3209", customer: "Sophia Chen", amount: "$79.50", status: "Shipped" },
  {
    id: "#3208",
    customer: "Isabella Rose",
    amount: "$199.99",
    status: "Processing",
  },
  {
    id: "#3207",
    customer: "Olivia Brown",
    amount: "$89.99",
    status: "Pending",
  },
];

const topProducts = [
  { name: "Pink Floral Dress", sales: 127, revenue: "$3,810" },
  { name: "Rose Gold Necklace", sales: 98, revenue: "$2,940" },
  { name: "Pastel Makeup Kit", sales: 89, revenue: "$2,670" },
  { name: "Cute Cat Bag", sales: 76, revenue: "$2,280" },
];

export default function Dashboard() {
  return (
    <div className="space-y-6 p-4 sm:p-6  dark:bg-gray-900 min-h-screen transition-colors">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
            Dashboard
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1 text-sm sm:text-base">
            Welcome back! Here's what's happening with your store.
          </p>
        </div>
        <button className="flex items-center px-3 sm:px-4 py-2 rounded-md bg-pink-600 hover:bg-pink-700 text-white shadow-md font-medium transition-colors text-sm sm:text-base">
          <Package className="w-4 h-4 mr-2" />
          Add Product
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {dashboardStats.map((stat, index) => (
          <div
            key={index}
            className="p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-md flex items-center justify-between transition-colors"
          >
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {stat.title}
              </p>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                {stat.value}
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                {stat.description}
              </p>
            </div>
            <stat.icon className="w-6 sm:w-8 h-6 sm:h-8 text-pink-600" />
          </div>
        ))}
      </div>

      {/* Charts & Tables Row */}
      <div className="grid gap-4 sm:gap-6 grid-cols-1 lg:grid-cols-2">
        {/* Recent Orders */}
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-md transition-colors">
          <div className="px-4 py-3 border-b border-gray-200 dark:border-gray-700 font-semibold flex items-center gap-2 text-sm sm:text-base text-gray-900 dark:text-white">
            <ShoppingCart className="w-4 sm:w-5 h-4 sm:h-5 text-pink-600" />
            Recent Orders
          </div>
          <div className="p-4 space-y-2 sm:space-y-4">
            {recentOrders.map((order) => (
              <div
                key={order.id}
                className="flex flex-col sm:flex-row sm:items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg transition-colors"
              >
                <div>
                  <p className="font-medium text-sm text-gray-900 dark:text-white">
                    {order.id}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {order.customer}
                  </p>
                </div>
                <div className="text-right mt-2 sm:mt-0">
                  <p className="font-medium text-sm text-gray-900 dark:text-white">
                    {order.amount}
                  </p>
                  <span
                    className={`text-xs px-2 py-1 rounded-full ${
                      order.status === "Delivered"
                        ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                        : order.status === "Shipped"
                        ? "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200"
                        : order.status === "Processing"
                        ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                        : "bg-gray-200 text-gray-800 dark:bg-gray-600 dark:text-gray-200"
                    }`}
                  >
                    {order.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Products */}
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-md transition-colors">
          <div className="px-4 py-3 border-b border-gray-200 dark:border-gray-700 font-semibold flex items-center gap-2 text-sm sm:text-base text-gray-900 dark:text-white">
            <TrendingUp className="w-4 sm:w-5 h-4 sm:h-5 text-pink-600" />
            Top Products
          </div>
          <div className="p-4 space-y-2 sm:space-y-4">
            {topProducts.map((product, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row sm:items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg transition-colors"
              >
                <div>
                  <p className="font-medium text-sm text-gray-900 dark:text-white">
                    {product.name}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {product.sales} sales
                  </p>
                </div>
                <div className="text-right mt-1 sm:mt-0">
                  <p className="font-medium text-sm text-pink-600">
                    {product.revenue}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-md transition-colors">
        <div className="px-4 py-3 border-b border-gray-200 dark:border-gray-700 font-semibold text-sm sm:text-base text-gray-900 dark:text-white">
          Quick Actions
        </div>
        <div className="p-4 grid gap-4 grid-cols-2 sm:grid-cols-4">
          <button className="h-20 flex flex-col items-center justify-center gap-2 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-sm text-gray-900 dark:text-white">
            <ShoppingBag className="w-6 h-6 text-pink-600" />
            Add Product
          </button>
          <button className="h-20 flex flex-col items-center justify-center gap-2 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-sm text-gray-900 dark:text-white">
            <Users className="w-6 h-6 text-pink-600" />
            View Customers
          </button>
          <button className="h-20 flex flex-col items-center justify-center gap-2 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-sm text-gray-900 dark:text-white">
            <Heart className="w-6 h-6 text-pink-600" />
            Manage Wishlists
          </button>
          <button className="h-20 flex flex-col items-center justify-center gap-2 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-sm text-gray-900 dark:text-white">
            <Star className="w-6 h-6 text-pink-600" />
            View Reviews
          </button>
        </div>
      </div>
    </div>
  );
}
