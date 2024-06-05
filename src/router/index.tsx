import {createBrowserRouter} from "react-router-dom";


import DashboardPage from "../pages/dashboard";
import SignIn from "../pages/auth/signin";
import MainLayout from "../layout/MainLayout";
import AuthLayout from "../layout/AuthLayout";


import ArticleList from "../pages/article/list";
import ArticleTag from "../pages/article/tag";
import ArticleType from "../pages/article/type";
import CreateArticle from "../pages/article/create";
import DraftBox from "../pages/article/draft_box";

import Profile from "../pages/profile";

import ProjectList from "../pages/project/list";
import ProjectCreate from "../pages/project/create";
import Setting from "../pages/other/setting";
import Other from "../pages/other/other";



const router = createBrowserRouter([
    {
        path: '/', element: <MainLayout />,
        children: [
            { path: 'dashboard', element: <DashboardPage /> },
            { path: 'profile', element: <Profile /> },
            {
                path: "article",
                children: [
                    { path: "list", element: <ArticleList /> },
                    { path: "tag", element: <ArticleTag /> },
                    { path: "type", element: <ArticleType /> },
                    { path: "create", element: <CreateArticle /> },
                    { path: "draft_box", element: <DraftBox /> }
                ]
            },
            {
                path: "project",
                children: [
                    { path: "list", element: <ProjectList /> },
                    { path: "create", element: <ProjectCreate /> },
                ]
            },
            { path: "other", element: <Other /> },
            { path: "setting", element: <Setting /> }
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