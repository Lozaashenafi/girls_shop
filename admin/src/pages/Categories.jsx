import React, { useMemo, useState } from "react";
import {
  Plus,
  Search,
  Filter,
  Edit,
  Trash2,
  Eye,
  FolderOpen,
} from "lucide-react";

// Mock categories data
const seedCategories = [
  {
    id: 1,
    name: "Dresses",
    description: "Beautiful dresses for every occasion",
    productsCount: 45,
    status: "Active",
    image:
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=100&h=100&fit=crop&crop=center",
  },
  {
    id: 2,
    name: "Jewelry",
    description: "Elegant jewelry and accessories",
    productsCount: 28,
    status: "Active",
    image:
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=100&h=100&fit=crop&crop=center",
  },
  {
    id: 3,
    name: "Beauty",
    description: "Makeup and beauty products",
    productsCount: 67,
    status: "Active",
    image:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=100&h=100&fit=crop&crop=center",
  },
  {
    id: 4,
    name: "Accessories",
    description: "Bags, belts, and cute accessories",
    productsCount: 34,
    status: "Inactive",
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=100&h=100&fit=crop&crop=center",
  },
];

export default function Categories() {
  const [query, setQuery] = useState("");
  const [items, setItems] = useState(seedCategories);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return items;
    return items.filter(
      (c) =>
        c.name.toLowerCase().includes(q) ||
        c.description.toLowerCase().includes(q)
    );
  }, [items, query]);

  const stats = useMemo(() => {
    const total = items.length;
    const active = items.filter((c) => c.status === "Active").length;
    const inactive = total - active;
    const products = items.reduce((sum, c) => sum + (c.productsCount || 0), 0);
    return { total, active, inactive, products };
  }, [items]);

  // Handlers (stubs)
  const onAdd = () => alert("Add Category clicked");
  const onView = (c) => alert(`View → ${c.name}`);
  const onEdit = (c) => alert(`Edit → ${c.name}`);
  const onDelete = (c) => {
    if (confirm(`Delete category \"${c.name}\"?`)) {
      setItems((prev) => prev.filter((x) => x.id !== c.id));
    }
  };

  return (
    <div className="min-h-screen  text-gray-900 dark:bg-gray-950 dark:text-gray-100">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-6 flex items-start justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              Categories
            </h1>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
              Organize your product categories
            </p>
          </div>
          <button
            onClick={onAdd}
            className="inline-flex items-center gap-2 rounded-xl bg-pink-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-950"
          >
            <Plus className="h-4 w-4" /> Add Category
          </button>
        </div>

        {/* Filters */}
        <div className="mb-6 rounded-2xl border border-gray-200 bg-white/80 p-4 shadow-sm backdrop-blur sm:p-5 dark:border-gray-800 dark:bg-gray-900/80">
          <div className="flex gap-3">
            <div className="relative flex-1">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
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

        {/* Categories Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((category) => (
            <div
              key={category.id}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md dark:border-gray-800 dark:bg-gray-900"
            >
              <div className="flex items-start gap-4">
                <div className="h-16 w-16 overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="min-w-0 flex-1">
                  <div className="mb-2 flex items-start justify-between gap-2">
                    <h3 className="truncate text-lg font-semibold">
                      {category.name}
                    </h3>
                    <span
                      className={
                        "inline-flex h-6 shrink-0 items-center justify-center rounded-full px-2 text-xs font-medium " +
                        (category.status === "Active"
                          ? "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300"
                          : "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300")
                      }
                    >
                      {category.status}
                    </span>
                  </div>

                  <p className="mb-3 line-clamp-2 text-sm text-gray-600 dark:text-gray-400">
                    {category.description}
                  </p>

                  <div className="mb-4 flex items-center justify-between text-sm">
                    <span className="font-medium text-pink-600 dark:text-pink-400">
                      {category.productsCount} products
                    </span>
                    <FolderOpen className="h-4 w-4 text-gray-400" />
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={() => onView(category)}
                      className="flex-1 rounded-lg border border-gray-300 bg-white px-3 py-2 text-xs font-medium text-gray-800 transition hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-pink-500 dark:border-gray-700 dark:bg-gray-950 dark:text-gray-100 dark:hover:bg-gray-900"
                    >
                      <span className="inline-flex items-center">
                        <Eye className="mr-1 h-3 w-3" /> View
                      </span>
                    </button>
                    <button
                      onClick={() => onEdit(category)}
                      className="flex-1 rounded-lg border border-gray-300 bg-white px-3 py-2 text-xs font-medium text-gray-800 transition hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-pink-500 dark:border-gray-700 dark:bg-gray-950 dark:text-gray-100 dark:hover:bg-gray-900"
                    >
                      <span className="inline-flex items-center">
                        <Edit className="mr-1 h-3 w-3" /> Edit
                      </span>
                    </button>
                    <button
                      onClick={() => onDelete(category)}
                      className="rounded-lg border border-red-200 bg-white px-2.5 py-2 text-xs font-semibold text-red-600 transition hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-red-500 dark:border-red-900/40 dark:bg-gray-950 dark:text-red-400 dark:hover:bg-red-950/40"
                      title="Delete"
                    >
                      <Trash2 className="h-3 w-3" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {filtered.length === 0 && (
            <div className="col-span-full rounded-2xl border border-dashed border-gray-300 p-10 text-center text-sm text-gray-500 dark:border-gray-700 dark:text-gray-400">
              No categories match your search.
            </div>
          )}
        </div>

        {/* Stats */}
        <div className="mt-8 grid gap-4 md:grid-cols-4">
          <StatCard
            icon={<FolderOpen className="h-5 w-5" />}
            value={String(stats.total)}
            label="Total Categories"
            iconWrapClass="bg-pink-600 text-white"
          />

          <StatCard
            icon={<FolderOpen className="h-5 w-5" />}
            value={String(stats.active)}
            label="Active"
            iconWrapClass="bg-green-600 text-white"
          />

          <StatCard
            icon={<FolderOpen className="h-5 w-5" />}
            value={String(stats.inactive)}
            label="Inactive"
            iconWrapClass="bg-amber-500 text-white"
          />

          <StatCard
            icon={<FolderOpen className="h-5 w-5" />}
            value={String(stats.products)}
            label="Total Products"
            iconWrapClass="bg-purple-600 text-white"
          />
        </div>
      </div>
    </div>
  );
}

function StatCard({ icon, value, label, iconWrapClass = "" }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-800 dark:bg-gray-900">
      <div className="flex items-center gap-3">
        <div
          className={`flex h-10 w-10 items-center justify-center rounded-xl ${iconWrapClass}`}
        >
          {icon}
        </div>
        <div>
          <p className="text-2xl font-bold leading-6">{value}</p>
          <p className="text-xs text-gray-600 dark:text-gray-400">{label}</p>
        </div>
      </div>
    </div>
  );
}
