import { createBrowserRouter } from "react-router-dom";
import Login from "./../Pages/Auth/Login";
import Root from "../Layout/Root";
import Register from "./../Pages/Auth/Register";
import Home from "../Pages/Home/Home";
import NotFound from "../Pages/NotFound/NotFound";
import ContactForm from "../Pages/ContactForm/ContactForm";
import OurService from "../Components/Home/OurService";
import Villas from "../Pages/EstateVillas/EstateVillas";
import EstateDetails from "../Components/Cards/EstateDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("/luxury.json"),
      },
      {
        path: "/estatevillas",
        element: <Villas />,
        loader: () => fetch("/luxury.json"),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/services",
        element: <OurService />,
      },
      {
        path: "/contact",
        element: <ContactForm />,
      },
      {
        path: "/estatedetails/:id",
        element: <EstateDetails />,
        loader: async ({ params }) => {
          const response = await fetch(`/luxury.json`);
          const data = await response.json();
          return data.find((estate) => estate.id === parseInt(params.id));
        },
      },
    ],
  },
]);

export default router;
