import React, {FC, useState} from "react";
import {Layout} from "antd";
import classNames from "classnames";
import {Outlet} from "react-router-dom";
import LogoFullWhite from "../resources/common/logo/logo-full-white.png"
import LogoWhite from "../resources/common/logo/logo-white.png"
import { MenuOutlined } from "@ant-design/icons"
import SiderMenu from "../components/SiderMenu";
import {siderMenu} from "../common/menus";
const { Header, Content, Sider ,Footer} = Layout

interface MainLayoutItf {
    showLink?: boolean
}

const MainLayout:FC<MainLayoutItf> = (props) => {

    const classes = classNames(
        "main-layout"
    )

    return (
        <div className={classes}>
            <Layout style={{ height: "100%" }}>
                <Sider className="main-layout-sider" width="12%">
                    <div className="logo">
                        <img src={LogoFullWhite} alt="logo" />
                    </div>
                    <div className="menu">
                        <SiderMenu list={siderMenu} />
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