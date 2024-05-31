import { Theme } from "@/types/theme"

export const getStorageTheme = (): Theme => {
    return localStorage.getItem("__theme") as Theme|null?? 'light'
}

export const setStorageTheme = (newValue: Theme) => {
    localStorage.setItem('__theme', newValue)
}