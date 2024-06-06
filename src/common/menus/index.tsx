import type { MenuProps } from "antd"
import React from "react";
import {FileTextOutlined, FileOutlined, PieChartOutlined, TeamOutlined, UserOutlined} from "@ant-design/icons";

export type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: "group"
    ): MenuItem {
    return { key, icon, children, label, type } as MenuItem
}

const siderMenu: MenuItem[] = [
    getItem("Main", "main", null, [
        getItem('Dashboard', '/dashboard', <PieChartOutlined />),
    ], "group"),
    getItem("Content", "content", null, [
        getItem('Article', 'sub1', <FileTextOutlined />, [
            getItem('List Manage', '/article/list', ),
            getItem('Tag Manage', '/article/tag'),
            getItem('Type Manage', '/article/type'),
            getItem('Create Article', "/article/create"),
            getItem('Draft Box', "/article/draft_box")
        ]),
        getItem('Project', 'sub2', <TeamOutlined />,  [
            getItem('Project List', '/project/list'),
            getItem('Create Project', '/project/create')
        ]),
    ],"group"),
    getItem("UserInfo", "userinfo", null, [
        getItem('Profile', '/profile', <UserOutlined />),
    ],"group"),
    getItem("Setting", "other", null, [
        getItem('Vendor', '/other', <UserOutlined />),
        getItem('Setting', '/setting', <FileOutlined />),
    ],"group"),
]

export {
    siderMenu
}
