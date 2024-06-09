import Container from "../../layout/Container";
import "../../styles/page/profile.scss"
import HeaderBg from "../../resources/page/profile/header-bg.jpg"

const ProfileOverview = () => {
    return (
        <div className="profile-page">
            <section>
                <Container className="profile-header" style={{padding: 0}}>
                    <div className="header-content-left">

                    </div>
                    <div className="header-content-right">
                        <div className="profile-header-bg">
                            <div className="background"></div>
                            <img src={HeaderBg} alt="bg" />
                        </div>
                    </div>
                </Container>
            </section>
        </div>
    )
}

export default ProfileOverview