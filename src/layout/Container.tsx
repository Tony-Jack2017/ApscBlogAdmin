import React, {CSSProperties, FC, Fragment, ReactElement, ReactNode} from "react";
import classNames from "classnames";
import {Divider} from "antd";

interface ContainerItf {
  style?: CSSProperties
  className?: string
  children?: ReactNode
  layout?: "normal" | "common" | "left-right"
  isNoStyle?: boolean
  isContent?: boolean
  hasDivider?: boolean
}

const ContainerLayout = (layout: string, children: ReactElement[], hasDivider: boolean) => {
  switch (layout) {
    case "normal":
      return children as ReactNode
    case "common":
      return (
        <Fragment>
          {
            children ? (
              <>
                <div className="container-header">
                  { children[0] }
                </div>
                { hasDivider && <Divider /> }
                <div className="container-content">
                  { children[1] }
                </div>
                {
                  children[2] && (
                    <>
                      { hasDivider && <Divider /> }
                      <div className="container-footer">{ children[2] }</div>
                    </>
                  )
                }
              </>
            ) : children
          }
        </Fragment>
      )
    case "left-right":
      return (
        <Fragment>
          <div className="container-left">
            { children[0] }
          </div>
          <div className="container-right">
            { children[1] }
          </div>
        </Fragment>
      )
  }
}
const Container: FC<ContainerItf> = (props) => {
  const {
    isContent = false,
    isNoStyle = false,
    hasDivider = false,
    style,
    className,
    children, layout = "normal"
  } = props

  const classes = classNames(
    "container",
    `container-layout_${layout}`,
    {"container-default": !isNoStyle},
    {"content-container": isContent},
    className,
  )

  return (
    <div className={classes} style={style}>
      { ContainerLayout(layout, children as ReactElement[], hasDivider) }
    </div>
  )
}

Container.propTypes = {
  children: function (props, propName) {
    let childLen = 0
    let errorMsg = ""
    switch (props["layout"]) {
      case "left-right":
        childLen = 2
        errorMsg = "The left-right layout only need 'left' child component and 'right' child component";break;
      case "common":
        childLen = 2
        errorMsg = "The common layout less need 2 child component";break;
      default:
        break;
    }
    if( (props["layout"] === "left-right" || props["layout"] === "common") && props[propName].length ? props[propName].length < childLen : true) {
      return new Error(errorMsg)
    }else {
      return null
    }
  }
}

export default Container