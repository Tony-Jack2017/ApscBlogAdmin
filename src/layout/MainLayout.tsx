import React, {FC} from "react";
import {Layout} from "antd";
import classNames from "classnames";
import {Outlet} from "react-router-dom";
import LogoFullWhite from "../resources/common/logo/logo-full-white.png"
import SiderMenu from "../components/SiderMenu";
import {siderMenu} from "../common/menus";
import MainHeader from "./components/main/Header";
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
                <Sider className="main-layout-sider" style={{
                    minWidth: "250", width: "12%", overflow: 'auto',
                    height: '100vh', position: 'fixed', left: 0, top: 0, bottom: 0
                }}>
                    <div className="logo">
                        <img src={LogoFullWhite} alt="logo" />
                    </div>
                    <div className="menu">
                        <SiderMenu list={siderMenu} />
                    </div>
                    <div className="info">
                    </div>
                </Sider>
                <Layout style={{ marginLeft: "200px"}}>
                    <Header style={{
                        boxSizing: 'border-box', width: "calc(100% - 200px)",
                        position: 'fixed', top: 0, zIndex: 1,
                    }} className="main-layout-header">
                        <MainHeader />
                    </Header>
                    <Content style={{
                        flex: "none", backgroundColor: "#f6f6f6",
                        marginTop: "72px", paddingBottom: "80px"
                    }}
                      className="main-layout-content">
                        <div className="content-header">
                            This is header content
                        </div>
                        <div className="content">
                            <Outlet />
                        </div>
                    </Content>
                    <Footer style={{
                        boxSizing: 'border-box', width: "calc(100% - 200px)",
                        position: 'fixed', bottom: 0, zIndex: 1,
                    }}
                      className="main-layout-footer">
                        Apsc Blog Admin ©2024 Created by APSC_BUILDER
                    </Footer>
                </Layout>
            </Layout>
        </div>
    )
}

export default MainLayout
