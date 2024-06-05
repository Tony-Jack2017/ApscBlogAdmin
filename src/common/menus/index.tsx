import type { MenuProps } from "antd"
import React from "react";
import {FileTextOutlined, FileOutlined, PieChartOutlined, TeamOutlined, UserOutlined} from "@ant-design/icons";

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    ): MenuItem {
    return { key, icon, children, label } as MenuItem;
}

const sidebarMenu: MenuItem[] = [
    getItem('Dashboard', '/dashboard', <PieChartOutlined />),
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
    getItem('Profile', '/profile', <UserOutlined />),
    getItem('Vendor', '/other', <UserOutlined />),
    getItem('Setting', '/setting', <FileOutlined />),

];

export {
    sidebarMenu
}