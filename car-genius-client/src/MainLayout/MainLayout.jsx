import { Outlet } from "react-router-dom";
import MainHeader from "../Shared/Headers/MainHeader";

const MainLayout = () => {
  return (
    <div>
      <MainHeader />
      <div className="max-w-7xl mx-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
