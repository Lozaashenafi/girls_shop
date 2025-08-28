import { Route, Routes } from "react-router-dom";
import "./App.css";
import Analytics from "./pages/Analytics";
import Categories from "./pages/Categories";
import Customers from "./pages/Customers";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Orders from "./pages/Orders";
import Payments from "./pages/Payments";
import Products from "./pages/Products";
import Reviews from "./pages/Reviews";
import Wishlists from "./pages/Wishlists";
import DashboardLayout from "./layout/DashboardLayout";
import SignUpPage from "./pages/SignUpPage";
import { AuthProvider } from "./context/AuthContext";
import PrivateRoute from "./components/PrivateRoute";
import AddCategory from "./pages/AddCategory";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <DashboardLayout />
            </PrivateRoute>
          }
        >
          <Route index element={<Index />} />
          <Route path="/products" element={<Products />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/payments" element={<Payments />} />
          <Route path="/wishlists" element={<Wishlists />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/categories/add" element={<AddCategory />} />
          <Route path="*" element={<NotFound />} />
        </Route>

        {/* Public route */}
        <Route path="/login" element={<SignUpPage />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
