import React from "react";
import ComUploadFile from "../../components/UploadFile";
import Container from "../../layout/Container";


type TestProp = {

}

class Test extends React.Component<TestProp, any> {
    constructor(props: TestProp, state: any) {
        super(props);

    }

    render() {
        return (
            <div>
                <Container>
                    <ComUploadFile url={"http://127.0.0.1:9527/api/v1/common/file/upload"} fileType="picture" />
                </Container>
            </div>
        )
    }
}

export default Test