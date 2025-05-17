import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "./Layout/MainLayout.jsx";
import Home from "./Component/Home.jsx";
import AddCoffee from "./Component/AddCoffee.jsx";
import UpDateCoffee from "./Component/UpDateCoffee.jsx";
import CoffeeDeatils from "./Component/CoffeeDeatils.jsx";
import Login from "./Pages/Login.jsx";
import Signin from "./Pages/Signin.jsx";
import AuthProvider from "./Provider/AuthProvider.jsx";
import Users from "./Pages/Users.jsx";
import UserAbout from "./Pages/UserAbout.jsx";
import UpdateUser from "./Pages/UpdateUser.jsx";
import Error from "./Pages/Error.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        loader: () => fetch("http://localhost:3000/coffees"),
        Component: Home,
      },
      {
        path: "/addcoffee",
        Component: AddCoffee,
      },
      {
        path: "/coffee/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/coffees/${params.id}`),
        Component: CoffeeDeatils,
      },
      {
        path: "upDateCoffee/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/coffees/${params.id}`),
        Component: UpDateCoffee,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/signin",
        Component: Signin,
      },
      {
        path:'/users',
        loader:()=>fetch('http://localhost:3000/users'),
        Component:Users
      },
      {
        path:'/UserAbout/:id',
        loader:({params})=>fetch(`http://localhost:3000/users/${params.id}`),
        Component:UserAbout
      },
      {
        path:'/UpdateUser/:id',
        loader:({params})=>fetch(`http://localhost:3000/users/${params.id}`),
        Component:UpdateUser
      }
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
