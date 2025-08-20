import {
  BarChart3,
  TrendingUp,
  TrendingDown,
  Users,
  ShoppingCart,
  DollarSign,
  Eye,
} from "lucide-react";

// Mock analytics data
const analyticsData = {
  overview: [
    {
      title: "Total Revenue",
      value: "$45,789",
      change: "+12.5%",
      trend: "up",
      icon: DollarSign,
      color: "bg-yellow-500",
    },
    {
      title: "Total Orders",
      value: "1,234",
      change: "+8.2%",
      trend: "up",
      icon: ShoppingCart,
      color: "bg-green-500",
    },
    {
      title: "Active Customers",
      value: "892",
      change: "+15.3%",
      trend: "up",
      icon: Users,
      color: "bg-blue-500",
    },
    {
      title: "Page Views",
      value: "45,678",
      change: "-2.1%",
      trend: "down",
      icon: Eye,
      color: "bg-purple-500",
    },
  ],
  topProducts: [
    { name: "Pink Floral Dress", sales: 145, revenue: "$12,955" },
    { name: "Rose Gold Necklace", sales: 98, revenue: "$12,739" },
    { name: "Pastel Makeup Kit", sales: 87, revenue: "$6,959" },
    { name: "Cute Cat Bag", sales: 76, revenue: "$3,492" },
    { name: "Pearl Earrings", sales: 65, revenue: "$8,450" },
  ],
  topCategories: [
    { name: "Dresses", percentage: 35, color: "bg-pink-500" },
    { name: "Jewelry", percentage: 28, color: "bg-purple-500" },
    { name: "Beauty", percentage: 22, color: "bg-blue-500" },
    { name: "Accessories", percentage: 15, color: "bg-green-500" },
  ],
  recentActivity: [
    {
      action: "New order placed",
      customer: "Emma Wilson",
      time: "2 minutes ago",
      type: "order",
    },
    {
      action: "Product review added",
      customer: "Sophia Chen",
      time: "15 minutes ago",
      type: "review",
    },
    {
      action: "Wishlist item added",
      customer: "Isabella Rose",
      time: "32 minutes ago",
      type: "wishlist",
    },
    {
      action: "Customer registered",
      customer: "Olivia Brown",
      time: "1 hour ago",
      type: "user",
    },
    {
      action: "Payment processed",
      customer: "Grace Miller",
      time: "2 hours ago",
      type: "payment",
    },
  ],
};

export default function Analytics() {
  return (
    <div className="space-y-6 p-4 sm:p-6  dark:bg-gray-900 min-h-screen transition-colors">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
            Analytics
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">
            Track your business performance and insights
          </p>
        </div>
      </div>

      {/* Overview Stats */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {analyticsData.overview.map((stat, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 shadow p-4"
          >
            <div className="flex items-center gap-3">
              <div
                className={`w-10 h-10 ${stat.color} rounded-lg flex items-center justify-center`}
              >
                <stat.icon className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {stat.value}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {stat.title}
                </p>
              </div>
              <div className="text-right">
                <div
                  className={`flex items-center gap-1 text-sm ${
                    stat.trend === "up" ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {stat.trend === "up" ? (
                    <TrendingUp className="w-4 h-4" />
                  ) : (
                    <TrendingDown className="w-4 h-4" />
                  )}
                  {stat.change}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Top Products */}
        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 shadow">
          <div className="p-4 border-b border-gray-200 dark:border-gray-700">
            <h2 className="flex items-center gap-2 text-lg font-semibold text-gray-900 dark:text-white">
              <BarChart3 className="w-5 h-5 text-pink-500" />
              Top Selling Products
            </h2>
          </div>
          <div className="p-4 space-y-4">
            {analyticsData.topProducts.map((product, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 bg-gray-100 dark:bg-gray-700 rounded-lg"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg flex items-center justify-center">
                    <span className="text-white text-sm font-bold">
                      {index + 1}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-gray-900 dark:text-white">
                      {product.name}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {product.sales} sales
                    </p>
                  </div>
                </div>
                <p className="font-bold text-pink-500">{product.revenue}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Category Performance */}
        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 shadow">
          <div className="p-4 border-b border-gray-200 dark:border-gray-700">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              Category Performance
            </h2>
          </div>
          <div className="p-4 space-y-4">
            {analyticsData.topCategories.map((category, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-900 dark:text-white">
                    {category.name}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {category.percentage}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div
                    className={`${category.color} h-2 rounded-full`}
                    style={{ width: `${category.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 shadow">
        <div className="p-4 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
            Recent Activity
          </h2>
        </div>
        <div className="p-4 space-y-4">
          {analyticsData.recentActivity.map((activity, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-3 bg-gray-100 dark:bg-gray-700 rounded-lg"
            >
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    {activity.action}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    by {activity.customer}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-2 py-1 text-xs rounded border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300">
                  {activity.type}
                </span>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {activity.time}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Monthly Performance */}
      <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 shadow">
        <div className="p-4 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
            Monthly Performance
          </h2>
        </div>
        <div className="p-4 grid gap-4 md:grid-cols-3">
          <div className="text-center p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
            <p className="text-2xl font-bold text-pink-500">$15,234</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              This Month Revenue
            </p>
            <div className="flex items-center justify-center gap-1 mt-1 text-green-600">
              <TrendingUp className="w-3 h-3" />
              <span className="text-xs">+18.2%</span>
            </div>
          </div>

          <div className="text-center p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
            <p className="text-2xl font-bold text-pink-500">456</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Orders This Month
            </p>
            <div className="flex items-center justify-center gap-1 mt-1 text-green-600">
              <TrendingUp className="w-3 h-3" />
              <span className="text-xs">+12.5%</span>
            </div>
          </div>

          <div className="text-center p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
            <p className="text-2xl font-bold text-pink-500">234</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              New Customers
            </p>
            <div className="flex items-center justify-center gap-1 mt-1 text-green-600">
              <TrendingUp className="w-3 h-3" />
              <span className="text-xs">+25.1%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
