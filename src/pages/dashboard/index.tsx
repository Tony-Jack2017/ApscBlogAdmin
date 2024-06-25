import Container from "../../layout/Container";
import {Suspense} from "react";

const DashboardPage = () => {
    return (
        <div className="dashboard-page">
            <Container>
                <Suspense>
                    This is dashboard Page
                </Suspense>
            </Container>
        </div>
    )
}

export default DashboardPage