import {createBrowserRouter} from "react-router-dom";
import Dashboard from "../pages/dashboard";
import SignIn from "../pages/auth/signin";
import MainLayout from "../components/layout/common/main-layout";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard />
            }
        ],
    },
    {
        path: '/auth',
        element: '',
        children: [
            {
                path: 'signIn',
                element: <SignIn />
            }
        ]
    }
])

export default router