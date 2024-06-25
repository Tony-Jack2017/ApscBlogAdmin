import React from "react";
import UploadFile from "../../components/UploadFile";


type TestProp = {

}

class Test extends React.Component<TestProp, any> {
    constructor(props: TestProp) {
        super(props);
    }

    render() {
        return (
            <div>
                <UploadFile />
            </div>
        )
    }
}

export default Test