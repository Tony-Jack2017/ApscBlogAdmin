import React from "react";
import Container from "../../layout/Container";



class Test extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            form: null,
        }
    }


    private handleParent = (num:string) => {
        alert("Parent response click " + num)
    }

    private handleChild = () => {
        alert("Child response click")
    }

    render() {
        return (
            <div>
                <Container style={{ position: "relative" }} layout="left-right">
                    <div onClick={() => this.handleParent("p 2")} onClickCapture={() => this.handleParent("p 1")} style={{width: 500, height: 500, background: "red", margin: 60}}>
                        <div onClickCapture={() => this.handleParent("c 1")} onClick={this.handleChild} style={{width: 200, height: 200, background: "blue", position: "absolute", top: 0, left: 0}}>
                        </div>
                        <div onClickCapture={() => this.handleParent("c 2")} onClick={this.handleChild} style={{width: 200, height: 200, background: "blue", position: "absolute", top: 0, right: 0}}>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
}

export default Test
