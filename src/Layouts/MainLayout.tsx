import type { FC } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const MainLayout: FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-300 font-mono">
      <Header />
      <main className="pt-20">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
export default MainLayout;
