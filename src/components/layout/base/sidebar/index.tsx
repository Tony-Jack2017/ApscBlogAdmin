
import Logo from "../../../../assets/common/logo/logo.png"
import LogoMb from "../../../../assets/common/logo/logo-m.png"

const Sidebar = () => {
    return (
        <div className="apsc-admin-main-sidebar">
            <div className="apsc-admin-main-logo">
                <img src={Logo} alt="logo" />
            </div>
            <div className="sidebar-content">
            </div>
            <div className="sidebar-footer">
                <img src={LogoMb} alt="logo mobile" />
                <div>
                    <span>APSC ADMIN</span>
                    <span style={{fontWeight: 300, fontSize: "12px", opacity: 0.75, fontFamily: "Ubuntu", marginLeft: "10px"}}> v1.0.0 </span>
                </div>
            </div>
        </div>
    )
}

export default Sidebar