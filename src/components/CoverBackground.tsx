import * as React from "react";
import {FC, ReactNode} from "react";

interface CoverBackgroundItf {
    /** Src of image avatar */
    cover?: React.ReactNode;
    className?: string
    children?: ReactNode
}

const CoverBackground:FC<CoverBackgroundItf> = (props) => {
    const { cover, className, children } = props
    return (
        <div className={className} style={{zIndex: 0}}>
            { children }
            <div className="cover-bg">
                <div className="background"></div>
                { cover && <img src={cover as string} alt="bg"/>}
            </div>
        </div>
    )
}

export default CoverBackground