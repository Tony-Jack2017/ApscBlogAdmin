import classNames from "classnames";
import {createContext, CSSProperties, FC, ReactNode, useRef, useState} from "react";

interface ComFormItemItf {
    style?: CSSProperties
    className?: string
    type?: string
    name?: string
    label?: string
    children?: ReactNode
}
interface ComFormItf {
    children: ReactNode
}

const FormContext = createContext({})

const useComForm = () => {
    const [formState, setFormState] = useState<object>()
    const setFieldValue = (name:string, value:any) => { setFormState((prevState) => {
        return { ...prevState, [name] : value }
    })}
    return {
        state: formState,
        setFieldValue
    }
}

const ComForm:FC<ComFormItf> = (props) => {
    const { children } = props
    const form = useRef(null)
    return (
        <FormContext.Provider value={{}}>
            <form className="common-form" ref={form}>
                { children }
            </form>
        </FormContext.Provider>
    )
}
const ComFormItem:FC<ComFormItemItf> = (props) => {

    const {
        name,
        label,
        type = "text",
        style, children,
        className
    } = props
    const [labelClass, setLabelClass] = useState(classNames("name"))
    const classes = classNames(className, "form-item")

    const handleActive = () => {
        setLabelClass(pre => {
            if(pre.includes("active")) {
                return ""
            }else {
                return "active"
            }
        })
    }

    return(
        <div className={classes} style={style}>
            <label htmlFor={name} className={labelClass}>{label}</label>
            { children ? children : <input type={type} onChange={} onFocus={handleActive} onBlur={handleActive}/>}
            <span className="tip"></span>
        </div>
    )
}
const ComInput = () => {
    return(
        <div className="input">
            <input className="input-inner" />
        </div>
    )
}


export {
    ComForm,
    ComFormItem,
    ComInput
}