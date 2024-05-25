import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import Layout from "../Layout/Layout";
import About from "../Pages/About";
import Feedback from "../Pages/Feedback";
import Login from "../Pages/Login";
import Register from "../Pages/Register";

export const router=createBrowserRouter([
    {
        path:'/',
        element:<Layout/>,
        children:[
            {
                path:'/',
                element:<Home/>               
            },
            {
                path:'/home',
                element:<Home/>
            },
            {
                path:'/about',
                element:<About/>
            },
            {
                path:'/feedback',
                element:<Feedback/>
            },
            {
                path:'/login',
                element:<Login/>
            },
            {
                path:'/register',
                element:<Register/>
            }
        ]
    }
])