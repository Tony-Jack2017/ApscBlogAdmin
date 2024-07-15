import "../../styles/page/setting.scss"
import {Outlet} from "react-router-dom";
import {Col, Row} from "antd";
import { ProfileOutlined,SolutionOutlined,FileDoneOutlined,AlertOutlined } from "@ant-design/icons"


import {CumMenuItemType} from "../../common/menus";


import CumMenu from "../../components/ui/CumMenu/CumMenu";
import Container from "../../layout/Container";

const menuList:CumMenuItemType[] = [
  {icon: <ProfileOutlined />, label: "Profile", key: "/setting/profile", path: "/setting/profile", active: false},
  {icon: <SolutionOutlined />, label: "Account", key: "/setting/account", path: "/setting/account", active: false},
  {icon: <FileDoneOutlined />, label: "Article", key: "/setting/article", path: "/setting/article", active: false},
  {icon: <AlertOutlined />, label: "Customization", key: "/setting/custom", path: "/setting/custom", active: false},
]

const Setting = () => {
  return (
    <div className="setting-page">
      <Container isNoStyle={true}>
        <Row gutter={32}>
          <Col span={4} className="layout-left">
            <div>
              <CumMenu direction="vertical" list={menuList} />
            </div>
          </Col>
          <Col span={20} className="layout-right">
            <Outlet />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Setting