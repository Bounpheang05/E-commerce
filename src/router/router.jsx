import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layout/RootLayout";
import Home from "../pages/Home";
import Bestsellers from "../pages/Bestsellers"; 
import NewArrival from "../pages/NewArrival";
import About from "../pages/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />, // ใช้ Layout ที่คุณสร้างไว้
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "bestsellers",
        element: <Bestsellers />,
      },
      {
        path: "newArrival",
        element: <NewArrival />,
      },
      {
        path: "about",
        element: <About />,
      }
      // ,{
      //   path: "orders",
      //   element: <Order />,
      // },
      // {
      //   path: "profile",
      //   element: <ProfileForm />,
      // },{
      //   path:"login",
      //   element: <Login />,
      // },{
      //   path:"register",
      //   element: <Register />,
      // }
    ],
  },
]);

export default router;
