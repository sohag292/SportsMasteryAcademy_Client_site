import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Error from "../Pages/Error/Error";
import Instructors from "../Pages/Instructors/Instructors";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import Classess from "../Pages/Classess/Classess";
import Dashboard from "../Layout/Dashboard";
import Student from "../Pages/Dashboard/Student";
import Enrolled from "../Pages/Dashboard/Enrolled";
import Payment from "../Pages/Dashboard/Payment";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "Instructor",
        element: <Instructors></Instructors>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signup",
        element: <Signup></Signup>,
      },
      {
        path: "classes",
        element: <Classess></Classess>,
      },
    ],
   
  },{
    path:'dashboard',
    element:<Dashboard></Dashboard>,
    children:[
      {
        path:"students",
        element:<Student></Student>
      },
      {
        path:"enrolled",
        element:<Enrolled></Enrolled>
      },
      {
        path:"payment",
        element:<Payment></Payment>
      },
    
    ]
  }
]);
