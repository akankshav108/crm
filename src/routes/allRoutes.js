import React from "react";

//Login
import Login from "../Pages/Login/Login";
import Register from "../Pages/Login/Register";
import ForgetPassword from "../Pages/Login/ForgetPassword";

//Not Found
import Page404 from "../Utility/Page404"

//Dashboard
import Dashboard from "../Pages/Dashboard/Dashboard";

const authRoutes = [

    //Login

    {path:"/", element:<Login />},
    {path:"/login", element:<Login />},
    {path:"/register", element:<Register />},
    {path:"/forget-password", element:<ForgetPassword />},

    //Dashboard
    {path:"/dashboard", element:<Dashboard />},

    //Not Found

    {path:"*", element:<Page404 />},

]



export {authRoutes};