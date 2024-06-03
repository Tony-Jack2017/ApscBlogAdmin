
import {Layout} from "antd";
const { Header, Content, Sider } = Layout



const MainLayout = () => {
    return (
        <div className="main-layout">
            <Layout>
                <Sider></Sider>
                <Layout>
                    <Header></Header>
                    <Content></Content>
                </Layout>
            </Layout>
        </div>
    )
}

export default MainLayout