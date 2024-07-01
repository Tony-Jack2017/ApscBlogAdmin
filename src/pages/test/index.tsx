import React from "react";
import { PlusOutlined } from "@ant-design/icons"
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
                    <div style={{ width: 300, height: 200 }}>
                        <ComUploadFile customClass="custom-upload" url={"http://127.0.0.1:9527/api/v1/common/file/upload"} fileType="picture">
                            <button style={{ border: 0, background: 'none' }} type="button">
                                <PlusOutlined />
                                <div style={{ marginTop: 8 }}>Upload</div>
                            </button>
                        </ComUploadFile>
                    </div>
                </Container>
            </div>
        )
    }
}

export default Test
