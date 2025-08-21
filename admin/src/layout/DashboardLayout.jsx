import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import { Sidebar } from "../components/Sidebar";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/authContext";

function DashboardLayout() {
  const [collapsed, setCollapsed] = useState(false);
  const { isLoggedIn, isAdmin } = useAuth();
  if (!isLoggedIn) return <Navigate to="/login" />;
  if (!isAdmin) return <Navigate to="/" />;

  function toggleSidebar() {
    setCollapsed((prev) => !prev);
  }

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {/* <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900"> */}
      <div className="min-h-screen bg-background flex">
        <Sidebar collapsed={collapsed} onToggle={toggleSidebar} />
        <div className="flex-1 flex flex-col">
          <Header />
          <main
            className={
              "flex-1 p-6 bg-background-alt overflow-auto transition-all duration-300  dark:bg-gray-900"
            }
          >
            <Outlet />
          </main>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default DashboardLayout;
