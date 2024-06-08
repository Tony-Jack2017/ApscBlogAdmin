import React, {FC} from "react";
import {MenuItem, siderMenu} from "../common/menus";
import {Menu} from "antd";
import {useNavigate} from "react-router-dom";

interface SiderMenuItf {
    list: MenuItem[]
}

const SiderMenu:FC<SiderMenuItf> = (props) => {
    const { list } = props
    const navigate = useNavigate()
    const handleSelect = (data:any) => {
        navigate(data.key)
    }

    return (
        <Menu
            theme="dark"
            defaultSelectedKeys={['2']}
            mode="inline"
            items={list}
            onSelect={handleSelect}
            style={{ flex: 1, minWidth: 0 }}
        >
        </Menu>
    )
}

export default SiderMenu
