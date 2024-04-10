import { createBrowserRouter } from "react-router-dom";
// import Root from "../Layout/Root";
// import Home from "../Pages/Home/Home";
// import SignUp from "./../Pages/Auth/Signup";
import NavBar from "../Pages/Shared/NavBar/NavBar";
import Login from "./../Pages/Auth/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

export default router;
