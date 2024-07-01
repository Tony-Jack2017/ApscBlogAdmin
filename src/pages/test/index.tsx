import React from "react";
import Container from "../../layout/Container";



class Test extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            form: null,
            articleContent: "",
            articleInfo: {
                type: 1,
                step: 1,
                title: "Chose a way to create your article",
                footerInfo: {
                    preVisible: false,
                    preTitle: "Last Step",
                    afterVisible: false,
                    afterTitle: "Next Step"
                }
            }
        }
    }

    static handleNext = () => {
    }

    static handlePre = () => {
    }

    render() {
        return (
            <div>
                <Container className="aritlce-container">
                    <div className="articleInfo-title">
                        <span className="title"> { this.state.articleInfo.title } </span>
                    </div>
                    <div className="articleInfo-content">

                    </div>
                    <div className="articleInfo-footer">

                    </div>
                </Container>
            </div>
        )
    }
}

export default Test
