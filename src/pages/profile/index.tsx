import React, {Fragment} from "react";
import {
    FileTextOutlined, ProductOutlined, PictureOutlined,
    BranchesOutlined, IdcardOutlined, PhoneOutlined, MailOutlined,
    EditOutlined
} from "@ant-design/icons";

import "../../styles/page/profile.scss"
import HeaderBg from "../../resources/page/profile/header-bg.jpg"
import AvatarImg from "../../resources/common/other/avatar.png"

import Container from "../../layout/Container";
import CoverBackground from "../../components/CoverBackground";
import {Avatar, Button, Divider} from "antd";
import {Outlet} from "react-router-dom";
import ComMenu from "../../components/ComMenu";
import {MenuItemType} from "antd/es/menu/interface";


const userInfo = [
    { title: "TimeLine", icon: <BranchesOutlined /> },
    { title: "Article", num: 134, icon: <FileTextOutlined /> },
    { title: "Project", num: 134, icon: <ProductOutlined /> },
    { title: "Photos", num: 134, icon: <PictureOutlined /> },
    { title: "About", icon: <IdcardOutlined /> },
]

const navMenu: MenuItemType[] = [
    { label: "Timeline", key: "/profile/timeline" },
    { label: "Edit Profile", key: "/profile/edit_profile" },
    { label: "User Resume", key: "/profile/resume" },
    { label: "Account", key: "/profile/account" },
    { label: "About", key: "/profile/about" },
]

const ProfileOverview = () => {
    return (
        <div className="profile-page">
            <section className="section section-1">
                <Container className="profile-header" style={{padding: 0}}>
                    <div className="header-content-left">
                        <div className="userinfo">
                            <Avatar src={AvatarImg} size={160} />
                            <div className="userinfo-content">
                                <div className="title">
                                    ApscBuilder
                                </div>
                                <p className="email">
                                    <MailOutlined style={{marginRight: 16}} />
                                    gan19991118@gmail.com
                                </p>
                                <p className="phone">
                                    <PhoneOutlined style={{marginRight: 16}} />
                                    18328375938
                                </p>
                            </div>
                            <div className="action">
                                <Button type="primary"
                                        icon={<EditOutlined />}
                                        style={{width: "100%", padding: "20px 20px"}}>
                                    Edit Profile
                                </Button>
                            </div>
                        </div>
                    </div>
                    <CoverBackground className="header-content-right" cover={HeaderBg}>
                        <div className="header"></div>
                        <div className="content">
                            <p>
                                Metus Sapien Ut Nunc Vestibulum Ante Ipsum Primis In Faucibus
                            </p>
                        </div>
                        <div className="footer">
                            <div className="footer-menu">
                                {
                                    userInfo.map((item, index) => {
                                        return (
                                            <Fragment key={index}>
                                                <div className="item">
                                                    { item.icon }
                                                    <span className="title">{ item.title }</span>
                                                    <span className="num">{ item.num }</span>
                                                </div>
                                                { index < userInfo.length - 1 && <Divider className="footer-menu-divider" type="vertical" /> }
                                            </Fragment>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </CoverBackground>
                </Container>
            </section>
            <section className="section section-2">
                <Container isNoStyle={true} className="content">
                    <div className="nav">
                        <ComMenu list={navMenu} />
                    </div>
                    <Container className="main-content">
                        <Outlet />
                    </Container>
                </Container>
            </section>
        </div>
    )
}

export default ProfileOverview