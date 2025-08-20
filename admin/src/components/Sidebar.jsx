import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { NavLink, useLocation } from "react-router-dom";

import {
  LayoutDashboard,
  ShoppingBag,
  FolderOpen,
  ShoppingCart,
  Users,
  Star,
  CreditCard,
  Heart,
  BarChart3,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const sidebarItems = [
  { title: "Dashboard", url: "/", icon: LayoutDashboard },
  { title: "Products", url: "/products", icon: ShoppingBag },
  { title: "Categories", url: "/categories", icon: FolderOpen },
  { title: "Orders", url: "/orders", icon: ShoppingCart },
  { title: "Customers", url: "/customers", icon: Users },
  { title: "Reviews", url: "/reviews", icon: Star },
  { title: "Payments", url: "/payments", icon: CreditCard },
  { title: "Wishlists", url: "/wishlists", icon: Heart },
  { title: "Analytics", url: "/analytics", icon: BarChart3 },
];

export function Sidebar({ collapsed, onToggle }) {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const SidebarContent = (
    <div className="h-full bg-white border-r border-gray-200 flex flex-col transition-all duration-300 dark:bg-gray-900 dark:border-gray-700">
      {/* Header */}
      <div
        className="p-4 border-b border-gray-200 flex items-center justify-between
                   dark:border-gray-700"
      >
        {!collapsed && (
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-pink-600 to-pink-500 rounded-lg flex items-center justify-center">
              <LayoutDashboard className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-gray-900 dark:text-white">
              Girly Admin
            </span>
          </div>
        )}
        <button
          onClick={() => {
            if (window.innerWidth < 768) {
              setMobileOpen(false);
            } else {
              onToggle();
            }
          }}
          className="h-8 w-8 flex items-center justify-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700                     text-gray-900 dark:text-white"
        >
          {collapsed ? (
            <ChevronRight className="h-4 w-4" />
          ) : (
            <ChevronLeft className="h-4 w-4" />
          )}
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
        {sidebarItems.map((item) => {
          const isActive = location.pathname === item.url;
          return (
            <NavLink
              key={item.title}
              to={item.url}
              className={`flex items-center px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 relative
                ${
                  isActive
                    ? "bg-gray-200  dark:bg-gray-800 text-black   dark:text-white shadow-sm"
                    : "text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white"
                }`}
              onClick={() => setMobileOpen(false)}
            >
              <item.icon
                className={`flex-shrink-0 w-5 h-5 transition-colors ${
                  collapsed ? "mx-auto" : "mr-3"
                }`}
              />
              {!collapsed && <span className="truncate">{item.title}</span>}
              {isActive && (
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-pink-500 rounded-r-full" />
              )}
            </NavLink>
          );
        })}
      </nav>

      <div
        className="p-4 border-t border-gray-200
                   dark:border-gray-700"
      >
        {!collapsed && (
          <div className="flex items-center space-x-3 p-3 rounded-lg bg-gray-100 dark:bg-gray-700/50">
            <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-pink-500 rounded-full flex items-center justify-center text-xs font-medium text-white">
              AD
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                Girly Admin
              </p>
              <p className="text-xs text-gray-600 dark:text-gray-400 truncate">
                admin@example.com
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden md:block">{SidebarContent}</div>

      {/* Mobile Sidebar */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div
            className="bg-black/50 flex-1"
            onClick={() => setMobileOpen(false)}
          />
          <div className="relative z-50">{SidebarContent}</div>
        </div>
      )}

      {/* Mobile Toggle Button */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 bg-gray-800 text-white p-2 rounded-lg hover:bg-gray-700"
        onClick={() => setMobileOpen(true)}
      >
        <LayoutDashboard className="w-5 h-5" />
      </button>
    </>
  );
}
