import React from "react";
import type { MenuProps } from "antd"
import {
    FileTextOutlined,
    SettingOutlined,
    PieChartOutlined,
    ProductOutlined,
    UserOutlined,
    FormOutlined,
    LogoutOutlined,
    DeploymentUnitOutlined
} from "@ant-design/icons";

export type MenuItem = Required<MenuProps>['items'][number];

function getItem( label: React.ReactNode, key: React.Key, icon?: React.ReactNode, children?: MenuItem[], type?: "group" ): MenuItem {
    return { key, icon, children, label, type } as MenuItem
}

const siderMenu: MenuItem[] = [
    getItem("Main", "main", null, [
        getItem('Dashboard', '/dashboard', <PieChartOutlined />),
    ], "group"),
    getItem("Content", "content", null, [
        getItem('Article', 'sub1', <FileTextOutlined />, [
            getItem('List Manage', '/article/list', ),
            getItem('Comment Manage', '/article/comment'),
            getItem('Derivative Manage', '/article/derivative'),
            getItem('Create Article', "/article/create"),
            getItem('Draft Box', "/article/draft_box")
        ]),
        getItem('Project', 'sub2', <ProductOutlined />,  [
            getItem('Project List', '/project/list'),
            getItem('Create Project', '/project/create')
        ]),
        getItem('Vendor', 'sub3', <DeploymentUnitOutlined />,  [
            getItem('StoreCenter', '/shop/list'),
        ]),
    ],"group"),
    getItem("UserInfo", "userinfo", null, [
        getItem('Profile', '/profile', <UserOutlined />),
    ],"group"),
    getItem("Setting", "other", null, [
        getItem('Setting', '/setting', <SettingOutlined />),
    ],"group"),
]

const userMenu: MenuItem[] = [
    getItem("Profile", "/profile", <UserOutlined />),
    getItem("Edit Profile", "/edit_profile", <FormOutlined />),
    getItem("Log Out", "/log_out", <LogoutOutlined />)
]

export {
    siderMenu,
    userMenu
}
