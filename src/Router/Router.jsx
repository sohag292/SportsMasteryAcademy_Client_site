import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Error from "../Pages/Error/Error";
import Instructors from "../Pages/Instructors/Instructors";

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
    ],
  },
]);
