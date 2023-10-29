import { Outlet } from "react-router-dom";
import MainHeader from "../Shared/Headers/MainHeader";
import Footer from "../Shared/Footer/Footer";

const MainLayout = () => {
  return (
    <div>
      <MainHeader />
      <div className="max-w-7xl mx-auto px-2 mb-10">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
