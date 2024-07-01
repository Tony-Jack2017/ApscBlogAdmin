import {CSSProperties, FC, ReactNode} from "react";
import classNames from "classnames";

interface ContainerItf {
    isNoStyle?: boolean
    style?: CSSProperties
    className?: string
    children?: ReactNode
}

const Container:FC<ContainerItf> = (props) => {
    const {
        isNoStyle = false,
        style,
        className,
        children
    } = props

    const classes = classNames(
        "container",
        { "container-default": !isNoStyle },
        className,
    )

    return (
        <div className={classes} style={style}>
            { children }
        </div>
    )
}

export default Container