import { Outlet } from "react-router-dom";
import NavBar from "../Pages/Shared/NavBar/NavBar";
const Root = () => {
  return (
    <div>
      <div className="container mx-auto">
        <div className="h-16">
          <NavBar />
        </div>
        <div className="min-h-[calc(100vh-50px)] mt-2">
          <Outlet />
        </div>
      </div>
      <div>{/* <Footer /> */}</div>
    </div>
  );
};

export default Root;
