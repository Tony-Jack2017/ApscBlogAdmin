import {FC, ReactNode} from "react";

interface IconItf {
    icon: ReactNode
    size: number | string
}

const Icon:FC<IconItf> = (props) => {
    const { icon, size } = props
    const innerStyle = {
        fontSize: size
    }
    return (
        <div className="icon" style={innerStyle}>
            { icon }
        </div>
    )
}

export default Icon