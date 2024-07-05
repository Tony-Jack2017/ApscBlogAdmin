import classNames from "classnames";
import React, {CSSProperties, FC, Fragment, ReactNode, useLayoutEffect, useRef, useState} from "react";
import ReactDOM from "react-dom";
import "./index.scss"

interface DropdownItf {
    children: ReactNode
    content?: ReactNode
    position?: "bot_rig" | "top_rig" | "bot_lef" | "top_left"
}

interface PortalItf {
    children?: ReactNode
}

const Portal:FC<PortalItf> = (props) => {
    const { children } = props
    return (<div>
        {
            typeof document === 'object'  && ReactDOM.createPortal(children, document.body)
        }
    </div>)
}

const CumDropdown:FC<DropdownItf> = (props) => {
    const {
        children,
        content,
    } = props
    const [showDrop, setShowDrop] = useState<boolean>(false)
    const [rect, setRect] = useState<CSSProperties>()
    const trigger = useRef<HTMLInputElement>(null)
    useLayoutEffect(() => {
        if (trigger.current) {
            const data = trigger.current.getBoundingClientRect()
            setRect({ top: `${data.top + trigger.current.clientHeight - 6}px`, right: `${window.innerWidth - (Math.ceil(data.right))}px` })
        }
    }, [trigger])
    const classes = classNames(
        "dropdown"
    )

    document.addEventListener('click', (e) => {
        setShowDrop((prevState) => {
            if(prevState) {
                return false
            }else {
                return false
            }
        })
    })

    const onTrigger: React.MouseEventHandler<HTMLDivElement>  = (e) => {
        e.nativeEvent.stopImmediatePropagation()
        setShowDrop((prevState) => {
            return !prevState
        })
    }

    return (
        <Fragment>
            <div className={classes}>
                <div ref={trigger} className="dropdown-trigger" onClick={onTrigger}>
                    { children }
                </div>
                <Portal>
                    {
                        showDrop && <div className="dropdown-content" style={rect}>
                            { content }
                        </div>
                    }
                </Portal>
            </div>
        </Fragment>
    )
}


export default CumDropdown