import { Button } from "antd";
import { UploadOutlined } from "@ant-design/icons"
import React from "react";
import ComUploadFile from "../../components/ComUploadFile";
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
                    <ComUploadFile url={"http://127.0.0.1:9527/api/v1/common/file/upload"} fileType="picture">
                        <Button icon={<UploadOutlined />}>Click to Upload</Button>
                    </ComUploadFile>
                </Container>
            </div>
        )
    }
}

export default Test
