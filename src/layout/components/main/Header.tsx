import { Input } from "antd"
import { SearchOutlined } from "@ant-design/icons"
import Navbar from "../../../components/Navbar";

const MainHeader = () => {
    return (
        <div className="main-header-content">
            <div className="header-search">
                <Input
                    placeholder="Enter some you want search"
                    prefix={<SearchOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
                />
            </div>
            <div className="header-nav">
                <Navbar />
            </div>
        </div>
    )
}

export default MainHeader