import {FC, ReactElement, ReactNode} from "react";
import Container from "./Container";

interface CumLayoutItf {
  cols: number
  gap?: number
  children: ReactElement<LayoutItemItf>[]
}

interface LayoutItemItf {
  col?: number
  className?: string
  children: ReactNode
}

const CumLayout:FC<CumLayoutItf> = (props) => {
  const { cols, gap,  children } = props
  const innerStyle = {
    gap: gap
  }
  return (
    <Container isNoStyle={true} style={innerStyle} className="cumstom-layout">
      { children }
    </Container>
  )
}

const LayoutItem:FC<LayoutItemItf> = (props) => {
  const { children } = props
  return (
    <div className="layout-item">
      { children }
    </div>
  )
}

LayoutItem.propTypes = {
}

export {
  CumLayout,
  LayoutItem
}