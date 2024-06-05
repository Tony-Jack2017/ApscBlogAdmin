import React, {FC} from "react";
import {Layout, Menu} from "antd";
import classNames from "classnames";
import {Outlet, useNavigate} from "react-router-dom";
import {sidebarMenu} from "../common/menus";
const { Header, Content, Sider ,Footer} = Layout

interface MainLayoutItf {
    showLink?: boolean
}

const MainLayout:FC<MainLayoutItf> = (props) => {

    const navigate = useNavigate()

    const classes = classNames(
        "main-layout"
    )

    const handleSelect = (data:any) => {
        navigate(data.key)
    }

    return (
        <div className={classes}>
            <Layout style={{ height: "100%" }}>
                <Sider className="main-layout-sider" width="12%">
                    <div className="logo" />
                    <div className="menu">
                        <Menu
                            theme="dark"
                            defaultSelectedKeys={['2']}
                            items={sidebarMenu}
                            mode="inline"
                            onSelect={handleSelect}
                            style={{ flex: 1, minWidth: 0 }}
                        />
                    </div>
                    <div className="info">
                    </div>
                </Sider>
                <Layout style={{ backgroundColor: "#f6f6f6" }}>
                    <Header className="main-layout-header">
                        This is header
                    </Header>
                    <Content className="main-layout-content">
                        <div className="content-header">
                            This is header content
                        </div>
                        <div className="content">
                            <Outlet />
                        </div>
                    </Content>
                    <Footer className="main-layout-footer">
                        Apsc Blog Admin ©2024 Created by APSC_BUILDER
                    </Footer>
                </Layout>
            </Layout>
        </div>
    )
}

export default MainLayout