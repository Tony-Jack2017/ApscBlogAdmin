import {createBrowserRouter} from "react-router-dom";


import MainLayout from "../layout/MainLayout";
import AuthLayout from "../layout/AuthLayout";
import ErrorPage from "../pages/common/error";
import Background from "../components/ui/Background";


import DashboardPage from "../pages/dashboard";
import Setting from "../pages/setting";
import Other from "../pages/other/other";
import ShopList from "../pages/shop/list";
import Test from "../pages/test";


import ArticleList from "../pages/article/list";
import ArticleComment from "../pages/article/comment";
import ArticleDerivative from "../pages/article/derivative";
import CreateArticle from "../pages/article/create";
import DraftBox from "../pages/article/draft_box";
import ProjectList from "../pages/project/list";
import ProjectCreate from "../pages/project/create";


import Forget from "../pages/auth/forget";
import SignIn from "../pages/auth/signIn";
import SignUp from "../pages/auth/signUp";

import Profile from "../pages/profile";
import ProfileTimeLine from "../pages/profile/timeline";
import ProfileAccount from "../pages/profile/account";
import {ProfileResume, ResumeDetail} from "../pages/profile/resume";
import SettingArticle from "../pages/setting/setting_article";
import SettingCustom from "../pages/setting/setting_custom";


const router = createBrowserRouter([
  {
    path: '/', element: <MainLayout/>, errorElement: <ErrorPage/>,
    children: [
      {path: 'dashboard', element: <DashboardPage/>},
      {path: "other", element: <Other/>},
      {path: "setting", element: <Setting/>},
      {path: "test", element: <Test/>},
      {
        path: "article",
        children: [
          {path: "list", element: <ArticleList/>},
          {path: "comment", element: <ArticleComment/>},
          {path: "derivative", element: <ArticleDerivative/>},
          {path: "create", element: <CreateArticle/>},
          {path: "draft_box", element: <DraftBox/>}
        ]
      },
      {
        path: "project",
        children: [
          {path: "list", element: <ProjectList/>},
          {path: "create", element: <ProjectCreate/>},
        ]
      },
      {
        path: "shop",
        children: [
          {path: "list", element: <ShopList/>},
        ]
      },
      {
        path: 'profile', element: <Profile/>,
        children: [
          {path: "timeline", element: <ProfileTimeLine/>},
          {path: "account", element: <ProfileAccount />},
          {path: "resume", element: <ProfileResume /> },
          {path: "resume_detail", element: <ResumeDetail /> }
        ]
      },
      {
        path: "setting", element: <Setting />,
        children: [
          { path: "article", element: <SettingArticle /> },
          { path: "custom", element: <SettingCustom /> }
        ]
      }
    ],
  },
  {
    path: '/auth', element: <AuthLayout backBg={<Background/>}/>,
    children: [
      {path: 'signIn', element: <SignIn/>},
      {path: 'signUp', element: <SignUp/>},
      {path: 'forget', element: <Forget/>},
    ]
  },
])

export default router