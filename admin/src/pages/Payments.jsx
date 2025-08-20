import { useState } from "react";
import {
  Search,
  Filter,
  Eye,
  CreditCard,
  CheckCircle,
  XCircle,
  Clock,
  Download,
} from "lucide-react";

// Mock payments data
const payments = [
  {
    id: "#PAY-3210",
    orderId: "#3210",
    customer: "Emma Wilson",
    amount: 129.99,
    method: "Card",
    transactionId: "txn_1234567890",
    date: "2024-01-15",
    status: "Success",
    type: "Sale",
  },
  {
    id: "#PAY-3209",
    orderId: "#3209",
    customer: "Sophia Chen",
    amount: 79.5,
    method: "Bank Transfer",
    transactionId: "txn_0987654321",
    date: "2024-01-14",
    status: "Success",
    type: "Sale",
  },
  {
    id: "#PAY-3208",
    orderId: "#3208",
    customer: "Isabella Rose",
    amount: 199.99,
    method: "Card",
    transactionId: "txn_1122334455",
    date: "2024-01-13",
    status: "Pending",
    type: "Sale",
  },
  {
    id: "#PAY-3207",
    orderId: "#3207",
    customer: "Olivia Brown",
    amount: 89.99,
    method: "Cash",
    transactionId: "txn_5544332211",
    date: "2024-01-12",
    status: "Failed",
    type: "Sale",
  },
  {
    id: "#REF-3206",
    orderId: "#3206",
    customer: "Grace Miller",
    amount: -45.0,
    method: "Card",
    transactionId: "txn_9988776655",
    date: "2024-01-11",
    status: "Success",
    type: "Refund",
  },
];

const getStatusIcon = (status) => {
  switch (status) {
    case "Success":
      return <CheckCircle className="w-4 h-4 text-green-600" />;
    case "Failed":
      return <XCircle className="w-4 h-4 text-red-600" />;
    case "Pending":
      return <Clock className="w-4 h-4 text-yellow-600" />;
    default:
      return <Clock className="w-4 h-4 text-gray-600" />;
  }
};

export default function Payments() {
  const [search, setSearch] = useState("");

  const filteredPayments = payments.filter(
    (p) =>
      p.customer.toLowerCase().includes(search.toLowerCase()) ||
      p.id.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 space-y-6  dark:bg-gray-900 min-h-screen text-gray-900 dark:text-gray-100">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
            Payments
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Track transactions and financial data
          </p>
        </div>
        <button className="flex items-center px-4 py-2 rounded-lg bg-pink-600 text-white hover:bg-pink-700 transition">
          <Download className="w-4 h-4 mr-2" /> Export
        </button>
      </div>

      {/* Filters */}
      <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-4">
        <div className="flex gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search payments..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-3 py-2 border rounded-lg bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>
          <button className="flex items-center px-4 py-2 border rounded-lg bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-600 transition">
            <Filter className="w-4 h-4 mr-2" /> Filter
          </button>
        </div>
      </div>

      {/* Payments List */}
      <div className="bg-white dark:bg-gray-800 shadow rounded-lg">
        <div className="border-b border-gray-200 dark:border-gray-700 px-4 py-2">
          <h2 className="font-semibold">Transaction History</h2>
        </div>
        <div className="p-4 space-y-4">
          {filteredPayments.map((payment) => (
            <div
              key={payment.id}
              className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition"
            >
              <div className="flex items-center gap-4">
                {getStatusIcon(payment.status)}
                <div>
                  <div className="flex items-center gap-2">
                    <p className="font-semibold text-sm">{payment.id}</p>
                    <span
                      className={`px-2 py-0.5 rounded text-xs font-medium ${
                        payment.status === "Success"
                          ? "bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100"
                          : payment.status === "Failed"
                          ? "bg-red-100 text-red-800 dark:bg-red-800 dark:text-red-100"
                          : payment.status === "Pending"
                          ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-700 dark:text-yellow-100"
                          : "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
                      }`}
                    >
                      {payment.status}
                    </span>
                    {payment.type === "Refund" && (
                      <span className="px-2 py-0.5 rounded text-xs font-medium bg-gray-200 text-gray-800 dark:bg-gray-600 dark:text-gray-100">
                        Refund
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Order: {payment.orderId}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {payment.customer}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="text-right">
                  <p className="text-sm font-medium">{payment.method}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {payment.transactionId}
                  </p>
                </div>

                <div className="text-right">
                  <p className="text-sm font-medium">{payment.date}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Transaction Date
                  </p>
                </div>

                <div className="text-right">
                  <p
                    className={`text-sm font-bold ${
                      payment.amount < 0
                        ? "text-red-600"
                        : "text-pink-600 dark:text-pink-400"
                    }`}
                  >
                    {payment.amount < 0 ? "-" : ""}${Math.abs(payment.amount)}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {payment.type}
                  </p>
                </div>

                <button className="flex items-center px-3 py-1.5 border rounded-lg bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-600 transition text-sm">
                  <Eye className="w-4 h-4 mr-2" /> View
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Payment Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-4 flex items-center gap-3">
          <div className="w-10 h-10 bg-pink-600 rounded-lg flex items-center justify-center">
            <CreditCard className="w-5 h-5 text-white" />
          </div>
          <div>
            <p className="text-2xl font-bold">$45,789</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Total Revenue
            </p>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-4 flex items-center gap-3">
          <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
            <CheckCircle className="w-5 h-5 text-white" />
          </div>
          <div>
            <p className="text-2xl font-bold">1,234</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Successful
            </p>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-4 flex items-center gap-3">
          <div className="w-10 h-10 bg-yellow-500 rounded-lg flex items-center justify-center">
            <Clock className="w-5 h-5 text-white" />
          </div>
          <div>
            <p className="text-2xl font-bold">45</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">Pending</p>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-4 flex items-center gap-3">
          <div className="w-10 h-10 bg-red-500 rounded-lg flex items-center justify-center">
            <XCircle className="w-5 h-5 text-white" />
          </div>
          <div>
            <p className="text-2xl font-bold">23</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">Failed</p>
          </div>
        </div>
      </div>
    </div>
  );
}
