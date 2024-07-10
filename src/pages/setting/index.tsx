import "../../styles/page/setting.scss"
import {Outlet} from "react-router-dom";
import CumMenu from "../../components/ui/CumMenu/CumMenu";
import {CumMenuItemType} from "../../common/menus";
import {CumLayout, LayoutItem} from "../../layout/CumLayout";

const menuList:CumMenuItemType[] = [
  {label: "Timeline", key: "/profile/timeline", path: "/profile/timeline", active: false},
  {label: "User Resume", key: "/profile/resume", path: "/profile/resume", active: false},
  {label: "Account", key: "/profile/account", path: "/profile/account", active: false},
]

const Setting = () => {

  return (
    <div className="setting-page">
      <CumLayout cols={2}>
        <LayoutItem className="layout-left">
          <div>
            <CumMenu direction="vertical" list={menuList} />
          </div>
        </LayoutItem>
        <LayoutItem className="layout-right">
          <Outlet />
        </LayoutItem>
      </CumLayout>
    </div>
  )
}

export default Setting