import {createBrowserRouter} from "react-router-dom";


import Dashboard from "../pages/dashboard";
import SignIn from "../pages/auth/signin";
import MainLayout from "../layout/MainLayout";
import AuthLayout from "../layout/AuthLayout";

const router = createBrowserRouter([
    {
        path: '/', element: <MainLayout />,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard />
            }
        ],
    },
    {
        path: '/auth', element: <AuthLayout />,
        children: [
            {
                path: 'signIn',
                element: <SignIn />
            }
        ]
    }
])

export default router