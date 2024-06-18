import React from "react";

function Person() {
    this.name = "Hello World"
    this.test = {
        find: "Thi is Test"
    }
}

let per1 = new Person()

let per2 = new Person()

per1.test = {
    hello: "Oops"
}

console.log(per2.test)

class Test extends React.Component {

}

export default Test