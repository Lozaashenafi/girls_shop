import { useState } from "react";
import { Search, Filter, Eye, Users, Mail, Phone, MapPin } from "lucide-react";

// Mock customers data
const customers = [
  {
    id: 1,
    name: "Emma Wilson",
    email: "emma@example.com",
    phone: "+1 (555) 123-4567",
    location: "New York, NY",
    totalOrders: 12,
    totalSpent: 1299.99,
    status: "Active",
    joinedDate: "2024-01-15",
    avatar:
      "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=40&h=40&fit=crop&crop=face",
  },
  {
    id: 2,
    name: "Sophia Chen",
    email: "sophia@example.com",
    phone: "+1 (555) 234-5678",
    location: "Los Angeles, CA",
    totalOrders: 8,
    totalSpent: 799.5,
    status: "Active",
    joinedDate: "2024-02-10",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
  },
  {
    id: 3,
    name: "Isabella Rose",
    email: "isabella@example.com",
    phone: "+1 (555) 345-6789",
    location: "Miami, FL",
    totalOrders: 15,
    totalSpent: 1899.99,
    status: "VIP",
    joinedDate: "2023-12-05",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=40&h=40&fit=crop&crop=face",
  },
  {
    id: 4,
    name: "Olivia Brown",
    email: "olivia@example.com",
    phone: "+1 (555) 456-7890",
    location: "Chicago, IL",
    totalOrders: 3,
    totalSpent: 289.99,
    status: "New",
    joinedDate: "2024-03-01",
    avatar:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=40&h=40&fit=crop&crop=face",
  },
];

function getStatusColor(status) {
  switch (status) {
    case "VIP":
      return "bg-purple-500 text-white";
    case "Active":
      return "bg-green-500 text-white";
    case "New":
      return "border border-gray-400 text-gray-700 dark:text-gray-200";
    default:
      return "bg-gray-300 text-gray-800 dark:bg-gray-700 dark:text-gray-200";
  }
}

export default function Customers() {
  const [search, setSearch] = useState("");

  const filteredCustomers = customers.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 space-y-6  dark:bg-gray-900 min-h-screen text-gray-900 dark:text-gray-100">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
            Customers
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Manage your customer relationships
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-4 border border-gray-200 dark:border-gray-700">
        <div className="flex gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search customers..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-3 py-2 border rounded-md bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-sm focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
          <button className="flex items-center px-4 py-2 border rounded-md text-sm hover:bg-gray-100 dark:hover:bg-gray-700">
            <Filter className="w-4 h-4 mr-2" /> Filter
          </button>
        </div>
      </div>

      {/* Customers List */}
      <div className="bg-white dark:bg-gray-800 shadow rounded-lg border border-gray-200 dark:border-gray-700">
        <div className="p-4 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-lg font-semibold">Customer Directory</h2>
        </div>
        <div className="divide-y divide-gray-200 dark:divide-gray-700">
          {filteredCustomers.map((customer) => (
            <div
              key={customer.id}
              className="flex items-center justify-between p-4 hover:bg-gray-50 dark:hover:bg-gray-700"
            >
              <div className="flex items-center gap-4">
                <img
                  src={customer.avatar}
                  alt={customer.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <p className="font-semibold">{customer.name}</p>
                    <span
                      className={`text-xs px-2 py-0.5 rounded-full ${getStatusColor(
                        customer.status
                      )}`}
                    >
                      {customer.status}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
                    <span className="flex items-center gap-1">
                      <Mail className="w-3 h-3" />
                      {customer.email}
                    </span>
                    <span className="flex items-center gap-1">
                      <Phone className="w-3 h-3" />
                      {customer.phone}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {customer.location}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="text-right">
                  <p className="text-sm font-medium">
                    {customer.totalOrders} orders
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Since {customer.joinedDate}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold text-blue-600 dark:text-blue-400">
                    ${customer.totalSpent}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Total spent
                  </p>
                </div>
                <button className="flex items-center px-3 py-1 border rounded-md text-sm hover:bg-gray-100 dark:hover:bg-gray-700">
                  <Eye className="w-4 h-4 mr-2" /> View
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Customer Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-4 flex items-center gap-3 border border-gray-200 dark:border-gray-700">
          <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
            <Users className="w-5 h-5 text-white" />
          </div>
          <div>
            <p className="text-2xl font-bold">2,847</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Total Customers
            </p>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-4 flex items-center gap-3 border border-gray-200 dark:border-gray-700">
          <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
            <Users className="w-5 h-5 text-white" />
          </div>
          <div>
            <p className="text-2xl font-bold">2,156</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">Active</p>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-4 flex items-center gap-3 border border-gray-200 dark:border-gray-700">
          <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center">
            <Users className="w-5 h-5 text-white" />
          </div>
          <div>
            <p className="text-2xl font-bold">234</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              VIP Members
            </p>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-4 flex items-center gap-3 border border-gray-200 dark:border-gray-700">
          <div className="w-10 h-10 bg-blue-400 rounded-lg flex items-center justify-center">
            <Users className="w-5 h-5 text-white" />
          </div>
          <div>
            <p className="text-2xl font-bold">457</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              New This Month
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
