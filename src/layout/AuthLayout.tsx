import {FC} from "react";
import classNames from "classnames";
import {Layout} from "antd";

interface AuthLayoutItf {
    type?: "center" | "left-right"
}

const AuthLayout:FC<AuthLayoutItf> = (props) => {

    const {
        type
    } = props

    const classes = classNames(
        "auth-layout",
        `layout-type__${type}`
    )

    return (
        <div className={classes}>
            <Layout>

            </Layout>
        </div>
    )
}

export default AuthLayout