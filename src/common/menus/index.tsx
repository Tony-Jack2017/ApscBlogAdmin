import type { MenuProps } from "antd"
import React from "react";
import {FileTextOutlined, FileOutlined, PieChartOutlined, TeamOutlined, UserOutlined} from "@ant-design/icons";

export type Item = Required<MenuProps>['items'][number];

export type SiderItem = {
    title: string
    content: MenuItem[]
}

export interface MenuItem {
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
}

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    ): MenuItem {
    return { key, icon, children, label }
}

const menuMain: MenuItem[] = [
    getItem('Dashboard', '/dashboard', <PieChartOutlined />),

]
const menuContent: MenuItem[] = [
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
]
const menuUser: MenuItem[] = [
    getItem('Profile', '/profile', <UserOutlined />),
    getItem('Vendor', '/other', <UserOutlined />),
]
const menuOther: MenuItem[] = [
    getItem('Setting', '/setting', <FileOutlined />),
]

const siderMenu:SiderItem[] = [
    { title: "Main", content: menuMain },
    { title: "Content", content: menuContent },
    { title: "User", content: menuUser },
    { title: "Other", content: menuOther },
]

export {
    siderMenu
}
