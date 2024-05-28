import { Theme } from "@/types/theme"

export const getTheme = (): Theme => {
    return localStorage.getItem("__theme") as Theme|null?? 'light'
}

export const setTheme = (newValue: Theme) => {
    localStorage.setItem('__theme', newValue)
}