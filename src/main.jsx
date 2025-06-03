import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "./Layout/MainLayout.jsx";
import Home from "./Component/Home.jsx";
import Login from "./Pages/Login.jsx";
import Signin from "./Pages/Signin.jsx";
import AuthProvider from "./Provider/AuthProvider.jsx";
import Users from "./Pages/Users.jsx";
import AddCoffee from "./Component/AddCoffee.jsx";
import Error from "./Pages/Error.jsx";
import PrivateRoute from "./routes/PrivateRoute.jsx";
import axios from "axios";
import CoffeeDeatils from "./Component/CoffeeDeatils.jsx";
import MyAddedCoffee from "./Pages/MyAddedCoffee.jsx";
import AllCoffees from "./Pages/AllCoffees.jsx";
import MyOrders from "./Pages/MyOrders.jsx";
import UpDateCoffee from "./Component/UpDateCoffee.jsx";

const router = createBrowserRouter([
  {
    path: "",
    Component: MainLayout,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        loader: () => axios(`${import.meta.env.VITE_API_URL}/coffees`),
        Component: Home,
      },
      {
        path: "/addCoffee",
        element: (
          <PrivateRoute>
            <AddCoffee />
          </PrivateRoute>
        ),
      },
      {
        path: "coffee/:id",
        loader: ({ params }) =>
          axios(`${import.meta.env.VITE_API_URL}/coffee/${params.id}`),
        element: (
          <PrivateRoute>
            <CoffeeDeatils></CoffeeDeatils>
          </PrivateRoute>
        ),
      },
      {
        path: "upDateCoffee/:id",
        loader:({params})=>fetch(`${import.meta.env.VITE_API_URL}/coffees/${params.id}`),
        element:<PrivateRoute>
          <UpDateCoffee></UpDateCoffee>
        </PrivateRoute>
      },
      {
        path: "/my-added-coffees/:email",
        loader: ({ params }) =>
          axios(`${import.meta.env.VITE_API_URL}/my-coffees/${params.email}`),
        element: (
          <PrivateRoute>
            <MyAddedCoffee />
          </PrivateRoute>
        ),
      },
      {
path:'/my-orders',
Component:MyOrders
      },
      {
        path:'/all',
        element:<AllCoffees/>,
           loader: () => axios(`${import.meta.env.VITE_API_URL}/coffees`),
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/signup",
       element:<Signin/>,
      },
      {
        path: "/users",
        loader: () =>
          fetch("https://coffee-store-server-sandy-six.vercel.app/users"),
        Component: Users,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
