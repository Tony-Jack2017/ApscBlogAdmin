import { FC } from "react";
import {MenuItemType} from "antd/es/menu/interface";


export interface ComMenuItf {
    list: MenuItemType[]
}

const ComMenu:FC<ComMenuItf> = (props) => {

    const { list } = props

    return (
        <nav className="common-menu">
            <ul>
                {
                    list.map((item, index) => {
                        return(
                            <li className="menu-item" key={index}>
                                { item.icon && <div className="icon">{item.icon}</div> }
                                <div className="content">{ item.label }</div>
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
    )
}

export default ComMenu