import { createBrowserRouter } from "react-router-dom";
// import Root from "../Layout/Root";
// import Home from "../Pages/Home/Home";
// import Login from "./../Pages/Auth/Login";
// import SignUp from "./../Pages/Auth/Signup";
import NavBar from "../Pages/Shared/NavBar/NavBar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavBar />,
  },
]);

export default router;
