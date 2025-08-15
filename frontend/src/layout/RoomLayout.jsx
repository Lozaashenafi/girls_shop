import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <>
      <div className="min-h-screen bg-gray-50 text-gray-900">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}

export default RootLayout;
