import React from "react";
import {
  Search,
  Filter,
  Eye,
  Package,
  Truck,
  CheckCircle,
  XCircle,
} from "lucide-react";

const orders = [
  {
    id: "#3210",
    customer: "Emma Wilson",
    email: "emma@example.com",
    date: "2024-01-15",
    amount: 129.99,
    status: "Delivered",
    items: 3,
    paymentStatus: "Paid",
  },
  {
    id: "#3209",
    customer: "Sophia Chen",
    email: "sophia@example.com",
    date: "2024-01-14",
    amount: 79.5,
    status: "Shipped",
    items: 2,
    paymentStatus: "Paid",
  },
  {
    id: "#3208",
    customer: "Isabella Rose",
    email: "isabella@example.com",
    date: "2024-01-13",
    amount: 199.99,
    status: "Processing",
    items: 4,
    paymentStatus: "Paid",
  },
  {
    id: "#3207",
    customer: "Olivia Brown",
    email: "olivia@example.com",
    date: "2024-01-12",
    amount: 89.99,
    status: "Pending",
    items: 1,
    paymentStatus: "Unpaid",
  },
];

const getStatusIcon = (status) => {
  switch (status) {
    case "Delivered":
      return <CheckCircle className="w-4 h-4 text-green-600" />;
    case "Shipped":
      return <Truck className="w-4 h-4 text-pink-600" />;
    case "Processing":
      return <Package className="w-4 h-4 text-yellow-600" />;
    default:
      return <XCircle className="w-4 h-4 text-gray-600" />;
  }
};

export default function Orders() {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
            Orders
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">
            Manage customer orders and fulfillment
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="mb-6 rounded-2xl border border-gray-200 bg-white/80 p-4 shadow-sm backdrop-blur sm:p-5 dark:border-gray-800 dark:bg-gray-900/80">
        <div className="flex gap-3">
          <div className="relative flex-1">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <input
              placeholder="Search categories..."
              className="w-full rounded-xl border border-gray-300 bg-white py-2 pl-10 pr-3 text-sm outline-none transition placeholder:text-gray-400 focus:border-pink-500 focus:ring-2 focus:ring-pink-500 dark:border-gray-700 dark:bg-gray-950"
            />
          </div>
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-800 transition hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-950 dark:text-gray-100 dark:hover:bg-gray-900"
            onClick={() => alert("Add filter logic here")}
          >
            <Filter className="h-4 w-4" /> Filter
          </button>
        </div>
      </div>

      {/* Orders List */}
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow">
        <div className="border-b border-gray-200 dark:border-gray-700 px-6 py-4">
          <h2 className="font-semibold text-gray-900 dark:text-white">
            Recent Orders
          </h2>
        </div>
        <div className="p-4 space-y-4">
          {orders.map((order) => (
            <div
              key={order.id}
              className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-900 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition"
            >
              <div className="flex items-center gap-4">
                {getStatusIcon(order.status)}
                <div>
                  <div className="flex items-center gap-2">
                    <p className="font-semibold text-sm text-gray-900 dark:text-white">
                      {order.id}
                    </p>
                    <span
                      className={`px-2 py-0.5 rounded-full text-xs ${
                        order.status === "Delivered"
                          ? "bg-green-100 text-green-700 dark:bg-green-800 dark:text-green-100"
                          : order.status === "Shipped"
                          ? "bg-pink-100 text-pink-700 dark:bg-pink-800 dark:text-pink-100"
                          : order.status === "Processing"
                          ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-800 dark:text-yellow-100"
                          : "bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300"
                      }`}
                    >
                      {order.status}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {order.customer}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-500">
                    {order.email}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900 dark:text-gray-200">
                    {order.date}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {order.items} items
                  </p>
                </div>

                <div className="text-right">
                  <p className="text-sm font-bold text-pink-600 dark:text-pink-400">
                    ${order.amount}
                  </p>
                  <span
                    className={`px-2 py-0.5 rounded-full text-xs ${
                      order.paymentStatus === "Paid"
                        ? "bg-green-100 text-green-700 dark:bg-green-800 dark:text-green-100"
                        : "bg-red-100 text-red-700 dark:bg-red-800 dark:text-red-100"
                    }`}
                  >
                    {order.paymentStatus}
                  </span>
                </div>

                <button className="px-3 py-1 border rounded-md text-sm flex items-center gap-1 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
                  <Eye className="w-4 h-4" /> View
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Order Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow p-4 flex items-center gap-3">
          <div className="w-10 h-10 bg-pink-500 rounded-lg flex items-center justify-center">
            <Package className="w-5 h-5 text-white" />
          </div>
          <div>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">
              892
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Total Orders
            </p>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow p-4 flex items-center gap-3">
          <div className="w-10 h-10 bg-yellow-500 rounded-lg flex items-center justify-center">
            <Package className="w-5 h-5 text-white" />
          </div>
          <div>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">
              45
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">Pending</p>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow p-4 flex items-center gap-3">
          <div className="w-10 h-10 bg-pink-500 rounded-lg flex items-center justify-center">
            <Truck className="w-5 h-5 text-white" />
          </div>
          <div>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">
              234
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">Shipped</p>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow p-4 flex items-center gap-3">
          <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
            <CheckCircle className="w-5 h-5 text-white" />
          </div>
          <div>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">
              613
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Delivered
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
