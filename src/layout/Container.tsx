import {FC, ReactNode} from "react";

interface ContainerItf {
    children?: ReactNode
}

const Container:FC<ContainerItf> = (props) => {

    const {
        children
    } = props

    return (
        <div className="container">
            { children }
        </div>
    )
}

export default Container