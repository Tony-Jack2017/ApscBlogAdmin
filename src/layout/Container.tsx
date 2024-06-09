import {CSSProperties, FC, ReactNode} from "react";

interface ContainerItf {
    style?: CSSProperties
    className?: string
    children?: ReactNode
}

const Container:FC<ContainerItf> = (props) => {
    const {
        style,
        className,
        children
    } = props

    return (
        <div className={`container ${className}`} style={style}>
            { children }
        </div>
    )
}

export default Container