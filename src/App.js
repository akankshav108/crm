import React from "react";

//Router
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Login from "./Pages/Login/Login";
import Register from "./Pages/Login/Register";
import ForgetPassword from "./Pages/Login/ForgetPassword";

//styles
import "./assets/scss/app.scss";
import "bootstrap/dist/css/bootstrap.min.css";

const router = createBrowserRouter([
  { path: "/", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "/forgetpassword", element: <ForgetPassword /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
