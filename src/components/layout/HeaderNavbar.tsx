import {FC} from "react";
import classNames from "classnames";
import {Avatar, Divider, Menu} from "antd";
import Dropdown from "../ui/CumDropdown/CumDropdown";
import {userMenu} from "../../common/menus";
import {useNavigate} from "react-router-dom";
import { MessageOutlined, AppstoreOutlined } from "@ant-design/icons"
import AvatarImg from "../../resources/common/other/avatar.png"
import Icon from "../ui/Icon";


interface HeaderNavbarItf {
}

interface UserMenuItf {
}

const UserMenu:FC<UserMenuItf> = (props) => {

    const navigate = useNavigate()
    const handleSelect = (data:any) => {
        navigate(data.key)
    }

    return (
        <div className="user-menu">
            <div className="user-menu-header">
                <Avatar style={{margin: "0 auto", display: "block"}} src={AvatarImg} size={82} />
                <div>
                    <p style={{fontSize: "20px", fontWeight: 700, marginTop: "6px"}}>Apsc Builder</p>
                    <p style={{ fontSize: "14px", fontWeight: 300, marginTop: "6px"}}>amiahburton@gmail.com</p>
                </div>
            </div>
            <Divider style={{margin: "12px 0"}} />
            <div className="user-menu-content">
                <Menu
                    theme="light"
                    items={userMenu}
                    onSelect={handleSelect}
                />
            </div>
        </div>
    )
}

const HeaderNavbar:FC<HeaderNavbarItf> = (props) => {

    const classes = classNames(
        "nav-bar"
    )

    return (
        <nav className={classes}>
            <ul>
                <li>
                    <Icon icon={<AppstoreOutlined />} size={20} />
                </li>
                <li>
                    <Icon icon={<MessageOutlined />} size={20} />
                </li>
                <li>
                    <Dropdown
                        content={<UserMenu />}
                    >
                        <Avatar src={AvatarImg}>
                            Tom
                        </Avatar>
                    </Dropdown>
                </li>
            </ul>
        </nav>
    )
}

export default HeaderNavbar