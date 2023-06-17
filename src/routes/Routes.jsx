import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import DashboardLayout from '../Layout/DashboardLayout';''
import ManageUsers from '../Pages/Dashboard/AdminDashboard/ManageUsers';
import ManageClasses from '../Pages/Dashboard/AdminDashboard/ManageClasses';
import AddAClass from '../Pages/Dashboard/InstructorDashboard/AddClass';
import AllClasses from '../Pages/AllClasses/AllClasses';
import MySelectedClasses from '../Pages/Dashboard/StudentDashboard/MySelectedClasses';
import Feedback from '../Pages/Feedback/Feedback';
import Payment from '../Pages/Payment/Payment';
import MyEnrolledClasses from '../Pages/Dashboard/StudentDashboard/MyEnrolledClasses';
import PaymentHistory from '../Pages/Dashboard/AdminDashboard/PaymentHistory';
import MyClasses from '../Pages/Dashboard/InstructorDashboard/MyClasses';
import Instructors from '../Pages/Instructors/Instructors';
import AdminRoute from './AdminRoute';
import PrivateRoute from './PrivateRoute';
import InstructorRoute from './InstructorRoute';
import MyPaymentHistory from '../Pages/Dashboard/StudentDashboard/MyPaymentHistory';
import Error from '../Pages/Error/Error';
import UpdateClass from '../Pages/Dashboard/InstructorDashboard/UpdateClass';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
            {
                path: 'allClasses',
                element: <AllClasses></AllClasses>
            },
            {
                path: 'instructors',
                element: <Instructors></Instructors>
            }

        ]
    },
    {
        path: 'dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            {
                path: 'paymentHistory',
                element: <AdminRoute><PaymentHistory></PaymentHistory></AdminRoute>
            },
            {
                path: 'manageUsers',
                element:  <AdminRoute><ManageUsers></ManageUsers></AdminRoute>
            },
            {
                path: 'manageClasses',
                element: <AdminRoute><ManageClasses></ManageClasses></AdminRoute>
            },
            {
                path: 'addAClass',
                element: <InstructorRoute><AddAClass></AddAClass></InstructorRoute>
            },
            {
                path: 'myClasses',
                element:<InstructorRoute><MyClasses></MyClasses></InstructorRoute>
            },
            {
                path: 'feedback',
                element: <InstructorRoute><Feedback></Feedback></InstructorRoute>
            },
            {
                path: 'updateClass/:id',
                element: <InstructorRoute><UpdateClass></UpdateClass></InstructorRoute>
            },
            {
                path: 'mySelectedClasses',
                element: <MySelectedClasses></MySelectedClasses>
            },
            {
                path: 'payment/:id',
                element: <Payment></Payment>
            },
            {
                path: 'myPaymentHistory',
                element: <MyPaymentHistory></MyPaymentHistory>
            },
            {
                path: 'myEnrolledClasses',
                element: <MyEnrolledClasses></MyEnrolledClasses>
            }
        ]
    }
]);


export default router;