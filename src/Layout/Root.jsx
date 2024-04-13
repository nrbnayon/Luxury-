import { Outlet } from "react-router-dom";
import NavBar from "../Pages/Shared/NavBar/NavBar";
import Footer from "../Pages/Shared/Footer/Footer";
const Root = () => {
  return (
    <div>
      <div className="container mx-auto overflow-x-hidden">
        <div className="h-16">
          <NavBar />
        </div>
        <div className="min-h-[calc(100vh-50px)] mt-2">
          <Outlet />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Root;
