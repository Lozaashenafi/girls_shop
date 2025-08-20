import { useState } from "react";
import {
  Search,
  Filter,
  Eye,
  Star,
  ThumbsUp,
  MessageSquare,
  Trash2,
} from "lucide-react";

// Mock reviews data
const reviews = [
  {
    id: 1,
    customer: "Emma Wilson",
    email: "emma@example.com",
    product: "Pink Floral Dress",
    rating: 5,
    comment:
      "Absolutely love this dress! The fabric is so soft and the fit is perfect. I've received so many compliments!",
    date: "2024-01-15",
    status: "Published",
    helpful: 12,
    avatar:
      "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=40&h=40&fit=crop&crop=face",
  },
  {
    id: 2,
    customer: "Sophia Chen",
    email: "sophia@example.com",
    product: "Rose Gold Necklace",
    rating: 5,
    comment:
      "Beautiful quality jewelry! Exactly as pictured and arrived quickly. Will definitely order again.",
    date: "2024-01-14",
    status: "Published",
    helpful: 8,
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
  },
  {
    id: 3,
    customer: "Isabella Rose",
    email: "isabella@example.com",
    product: "Pastel Makeup Kit",
    rating: 4,
    comment:
      "Great colors and good quality. The eyeshadows blend nicely. Only wish it came with a mirror.",
    date: "2024-01-13",
    status: "Published",
    helpful: 6,
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=40&h=40&fit=crop&crop=face",
  },
  {
    id: 4,
    customer: "Olivia Brown",
    email: "olivia@example.com",
    product: "Cute Cat Bag",
    rating: 3,
    comment:
      "The bag is cute but smaller than expected. Quality is okay for the price.",
    date: "2024-01-12",
    status: "Pending",
    helpful: 2,
    avatar:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=40&h=40&fit=crop&crop=face",
  },
];

const renderStars = (rating) => {
  return Array.from({ length: 5 }, (_, i) => (
    <Star
      key={i}
      className={`w-4 h-4 ${
        i < rating
          ? "fill-yellow-400 text-yellow-400"
          : "text-gray-300 dark:text-gray-600"
      }`}
    />
  ));
};

export default function Reviews() {
  const [search, setSearch] = useState("");

  return (
    <div className="p-6 space-y-6 bg-white dark:bg-gray-900 min-h-screen text-gray-900 dark:text-gray-100">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
            Reviews
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">
            Monitor and manage customer feedback
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow p-4">
        <div className="flex gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500 w-4 h-4" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search reviews..."
              className="w-full pl-10 pr-3 py-2 text-sm rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button className="flex items-center px-4 py-2 text-sm border rounded-lg bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-600">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </button>
        </div>
      </div>

      {/* Reviews List */}
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow p-4">
        <h2 className="text-lg font-semibold mb-4">Customer Reviews</h2>
        <div className="space-y-6">
          {reviews
            .filter((r) =>
              r.customer.toLowerCase().includes(search.toLowerCase())
            )
            .map((review) => (
              <div
                key={review.id}
                className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition"
              >
                <div className="flex items-start gap-4">
                  <img
                    src={review.avatar}
                    alt={review.customer}
                    className="w-10 h-10 rounded-full object-cover"
                  />

                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <p className="font-semibold text-sm">
                          {review.customer}
                        </p>
                        <div className="flex items-center gap-1">
                          {renderStars(review.rating)}
                        </div>
                        <span
                          className={`px-2 py-0.5 text-xs rounded-full ${
                            review.status === "Published"
                              ? "bg-green-100 text-green-700 dark:bg-green-800 dark:text-green-200"
                              : "bg-yellow-100 text-yellow-700 dark:bg-yellow-800 dark:text-yellow-200"
                          }`}
                        >
                          {review.status}
                        </span>
                      </div>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {review.date}
                      </p>
                    </div>

                    <p className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-2">
                      {review.product}
                    </p>

                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-3 leading-relaxed">
                      {review.comment}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
                        <div className="flex items-center gap-1">
                          <ThumbsUp className="w-3 h-3" />
                          {review.helpful} found helpful
                        </div>
                        <div className="flex items-center gap-1">
                          <MessageSquare className="w-3 h-3" />
                          Reply
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <button className="flex items-center px-2 py-1 border rounded text-xs bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-600">
                          <Eye className="w-3 h-3 mr-1" /> View
                        </button>
                        <button className="flex items-center px-2 py-1 border rounded text-xs text-red-600 border-red-600 hover:bg-red-600 hover:text-white">
                          <Trash2 className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* Review Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        {[
          { label: "Total Reviews", value: "1,456", color: "bg-blue-500" },
          { label: "Average Rating", value: "4.8", color: "bg-yellow-500" },
          { label: "Published", value: "1,289", color: "bg-green-500" },
          { label: "Pending Review", value: "167", color: "bg-orange-500" },
        ].map((stat, i) => (
          <div
            key={i}
            className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow p-4"
          >
            <div className="flex items-center gap-3">
              <div
                className={`${stat.color} w-10 h-10 rounded-lg flex items-center justify-center`}
              >
                <Star className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-2xl font-bold">{stat.value}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {stat.label}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
