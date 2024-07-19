import React, {createContext, FC, ReactNode} from "react";

interface ThemeProviderItf {
  theme: any
  children: ReactNode
}

const ThemeContext = createContext({})

const ThemeProvider:FC<ThemeProviderItf> = (props) => {
  return (
    <ThemeContext.Provider value={props.theme}>
      {props.children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider

