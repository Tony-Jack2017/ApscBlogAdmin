import classNames from "classnames";
import {
  ChangeEventHandler,
  createContext,
  CSSProperties,
  FC,
  ReactNode,
  useContext,
  useState
} from "react";

type FormInner = {
  state: any | undefined,
  setFieldValue: (name:string, value:any) => void
}
type FormContextType = {
  formState: any | undefined
  updateStateFunc: (name:string, value:any) => void
}
interface ComFormItemItf {
  style?: CSSProperties
  className?: string
  type?: string
  name: string
  label?: string
  children?: ReactNode
}
interface ComFormItf {
  form?: FormInner
  children: ReactNode
}

const FormContext = createContext<FormContextType>({
  formState: undefined,
  updateStateFunc: (name:string, value:any) => {}
})
const useComForm = (): FormInner => {
  const [formState, setFormState] = useState<object>()
  const setFieldValue = (name: string, value: any) => {
    setFormState((prevState) => {
      return {...prevState, [name]: value}
    })
  }
  return {
    state: formState,
    setFieldValue
  }
}

const ComForm: FC<ComFormItf> = (props) => {
  const { form, children} = props
  return (
    <FormContext.Provider value={form ? {
      formState: form.state,
      updateStateFunc: form.setFieldValue
    } : {  formState: undefined, updateStateFunc: (name:string, value:any) => {} }}>
      <form className="common-form">
        {children}
      </form>
    </FormContext.Provider>
  )
}
const ComFormItem: FC<ComFormItemItf> = (props) => {
  const {
    name,
    label,
    type = "text",
    style, children,
    className
  } = props
  const [labelClass, setLabelClass] = useState(classNames("name"))
  const classes = classNames(className, "form-item")
  const formContext = useContext(FormContext)
  const handleActive = () => {
    setLabelClass(pre => {
      if(formContext.formState && !formContext.formState[name]) {
        if (pre.includes("active")) {
          return ""
        } else {
          return "active"
        }
      }else {
        return pre
      }
    })
  }
  const handleChange:ChangeEventHandler<HTMLInputElement> = (e) => {
    formContext.updateStateFunc(name as string, e.target.valueOf())
  }

  return (
    <div className={classes} style={style}>
      <label className={labelClass}>{label}</label>
      {children ? children : <input name={name} type={type} onChange={handleChange} onFocus={handleActive} onBlur={handleActive}/>}
      <span className="tip"></span>
    </div>
  )
}
const ComInput = () => {
  return (
    <div className="input">
      <input className="input-inner"/>
    </div>
  )
}


export {
  ComForm,
  ComFormItem,
  ComInput,
  useComForm
}
