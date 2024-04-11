import { createBrowserRouter } from "react-router-dom";
import Login from "./../Pages/Auth/Login";
import Root from "../Layout/Root";
import Register from "./../Pages/Auth/Register";
import Home from "../Pages/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <p>Error Page not Found</p>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
