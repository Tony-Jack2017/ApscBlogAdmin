import {createBrowserRouter} from "react-router-dom";


import MainLayout from "../layout/MainLayout";
import AuthLayout from "../layout/AuthLayout";
import ErrorPage from "../pages/common/error";

import DashboardPage from "../pages/dashboard";
import ArticleList from "../pages/article/list";
import ArticleComment from "../pages/article/comment";
import ArticleDerivative from "../pages/article/derivative";
import CreateArticle from "../pages/article/create";
import DraftBox from "../pages/article/draft_box";
import Profile from "../pages/profile";
import ProjectList from "../pages/project/list";
import ProjectCreate from "../pages/project/create";
import Setting from "../pages/other/setting";
import Other from "../pages/other/other";


import Access from "../pages/auth/access";
import Forget from "../pages/auth/forget";
import Test from "../pages/test";


const router = createBrowserRouter([
    {
        path: '/', element: <MainLayout />, errorElement: <ErrorPage />,
        children: [
            { path: 'dashboard', element: <DashboardPage /> },
            { path: 'profile', element: <Profile /> },
            {
                path: "article",
                children: [
                    { path: "list", element: <ArticleList /> },
                    { path: "comment", element: <ArticleComment /> },
                    { path: "derivative", element: <ArticleDerivative /> },
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
            { path: 'access', element: <Access /> },
            { path: 'forget', element: <Forget /> },
        ]
    },
    { path: "/test", element: <Test /> }
])

export default router