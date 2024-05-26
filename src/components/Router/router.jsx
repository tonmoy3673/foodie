import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Dashboard/DashboardLayout";
import Home from "../Home/Home";
import Layout from "../Layout/Layout";
import About from "../Pages/About";
import Feedback from "../Pages/Feedback";
import FoodDetails from "../Pages/Foods/FoodDetails";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PrivateRoute from "./PrivateRoute";

export const router=createBrowserRouter([
    {
        path:'/',
        element:<Layout/>,
        children:[
            {
                path:'/',
                element:<Home/>,
                loader:()=> fetch("http://localhost:3000/foods")             
            },
            {
                path:'/home',
                element:<Home/>,
                loader:()=> fetch("http://localhost:3000/foods")
            },
            {
                path:'/foods/:id',
                element:<FoodDetails/>,
                loader:({params})=>fetch(`http://localhost:3000/foods/${params.id}`)
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
    },
    {
        path:'/dashboard',
        element:<PrivateRoute><DashboardLayout/></PrivateRoute>,
        children:[
            {
                
            }
        ]
    }
])