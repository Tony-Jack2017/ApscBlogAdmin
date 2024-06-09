import React from "react";
import {
    FileTextOutlined, ProductOutlined, PictureOutlined,
    BranchesOutlined, IdcardOutlined
} from "@ant-design/icons";

import "../../styles/page/profile.scss"
import HeaderBg from "../../resources/page/profile/header-bg.jpg"

import Container from "../../layout/Container";
import CoverBackground from "../../components/CoverBackground";


const userInfo = [
    { title: "TimeLine", icon: <BranchesOutlined /> },
    { title: "Article", num: 134, icon: <FileTextOutlined /> },
    { title: "Project", num: 134, icon: <ProductOutlined /> },
    { title: "Photos", num: 134, icon: <PictureOutlined /> },
    { title: "About", icon: <IdcardOutlined /> },
]

const ProfileOverview = () => {
    return (
        <div className="profile-page">
            <section>
                <Container className="profile-header" style={{padding: 0}}>
                    <div className="header-content-left">

                    </div>
                    <CoverBackground className="header-content-right" cover={HeaderBg}>
                        <div className="footer">

                        </div>
                    </CoverBackground>
                </Container>
            </section>
        </div>
    )
}

export default ProfileOverview