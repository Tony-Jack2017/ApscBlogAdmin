import React, {FC} from "react";
import {SiderItem, siderMenu} from "../common/menus";
import {Menu} from "antd";
import {useNavigate} from "react-router-dom";
import GenChild from "../common/components/GenChild";
import SubMenu from "antd/es/menu/SubMenu";
import MenuItem from "antd/es/menu/MenuItem";

interface SiderMenuItf {
    list: SiderItem[]
}

const SiderMenu:FC<SiderMenuItf> = (props) => {

    const navigate = useNavigate()

    const handleSelect = (data:any) => {
        navigate(data.key)
    }

    return (
        <div>
            <Menu
                theme="dark"
                defaultSelectedKeys={['2']}
                mode="inline"
                onSelect={handleSelect}
                style={{ flex: 1, minWidth: 0 }}
            >
                {
                    siderMenu.map((item, index) => {
                        return (
                            <div className="sider-item" key={index}>
                                <div className="menu-title">
                                    { item.title }
                                </div>
                                {
                                    GenChild(item.content, MenuItem, SubMenu)
                                }
                            </div>
                        )
                    })
                }
            </Menu>
        </div>
    )
}

export default SiderMenu
