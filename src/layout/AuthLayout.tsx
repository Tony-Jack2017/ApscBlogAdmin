import {FC, ReactNode} from "react";
import classNames from "classnames";
import BackgroundImg from "../resources/page/profile/header-bg_3.jpg"
import {Outlet} from "react-router-dom";
import Container from "./Container";

interface AuthLayoutItf {
    type?: "center" | "left-right"
    backBg?: string | ReactNode
}

const AuthLayout:FC<AuthLayoutItf> = (props) => {

    const { type, backBg } = props
    const classes = classNames(
        "auth-layout",
        `layout-type__${type}`
    )
    return (
        <div className={classes}>
            <div className="layout-overlay"></div>
            <div className="layout-background">
                { backBg ? backBg : <img src={BackgroundImg} alt="background" />}
            </div>
            <Container isNoStyle={true} style={{ marginTop: "20vh", zIndex: 2, position: "relative" }}>
               <Outlet />
            </Container>
        </div>
    )
}

export default AuthLayout