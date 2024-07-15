import {FC, useRef, useState} from "react";

import "./index.scss"
import classNames from "classnames";
import {ImmerReducer, useImmerReducer} from "use-immer";
import {CumMenuItemType} from "../../../common/menus";
import {useNavigate} from "react-router-dom";
import {Console} from "inspector";

export interface ComMenuItf {
  list: CumMenuItemType[]
  direction?: "vertical" | "horizontal"
  type?: "capsule" | "line"
  isLink?: boolean
  onSelect?: (item:CumMenuItemType) => void
}
type menuAction = {
  type: string
  payload: any
}

const listReducer:ImmerReducer<CumMenuItemType[], menuAction> = (daft,action) => {
  switch (action.type) {
    case "SELECT_ONE":
      daft[action.payload.activeIndex].active = true
      break;
    default: {
      throw Error('未知 action：' + action.type);
    }
  }
}

const CumMenu: FC<ComMenuItf> = (props) => {
  const {
    list, direction = "horizontal", type = "capsule",
    isLink = true, onSelect
  } = props
  const navigate = useNavigate()
  const customMenu = useRef(null)
  const [menu, dispatch] = useImmerReducer(listReducer, list)
  const [select, setSelect] = useState<number>()

  const classes = classNames(
    "custom-menu",
    `${direction}-menu`,
    `${type}-menu`
  )

  const handleClick = (item:CumMenuItemType, index: number) => {
    setSelect(index)
    if (isLink) { navigate(item.path) }
    if (onSelect) { onSelect(item) }
    dispatch({
      type: "SELECT_ONE",
      payload: {
        activeIndex: index
      }
    })
  }

  console.log(menu.forEach(item => {
    console.log(item)
  }))

  return (
    <nav ref={customMenu} className={classes}>
      <ul>
        {
          menu.map((item, index) => {
            return (
              <li className={`menu-item ${select === index ? 'menu-item-active' : 'menu-item-inactive'}`} key={index} onClick={() => { handleClick(item, index) }}>
                {item.icon && <div className="icon">{item.icon}</div>}
                <div className="content">{item.label}</div>
              </li>
            )
          })
        }
        <span className="spanner"></span>
      </ul>
    </nav>
  )
}

export default CumMenu