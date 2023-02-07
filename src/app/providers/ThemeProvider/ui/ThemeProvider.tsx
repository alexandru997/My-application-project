import {LOCAL_STORAGE_KEY, Theme, ThemeContext} from "../lib/ThemeContext";
import React, {FC, ReactElement, useMemo, useState} from "react";

type Props = {
    children: ReactElement
}
const defaultTheme = localStorage.getItem(LOCAL_STORAGE_KEY) as Theme || Theme.LIGHT;

 const ThemeProvider: FC<Props> = ({children}) => {
    const [theme, setTheme] = useState<Theme>(defaultTheme)
    const defaultProps = useMemo(() => ({
        theme: theme,
        setTheme: setTheme
    }), [theme])

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    )
}
export default ThemeProvider
