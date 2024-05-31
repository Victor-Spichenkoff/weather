"use client"

import { useEffect, useState } from 'react'
import Dark from '@/assets/icons/dark.svg'
import Light from '@/assets/icons/ligth.svg'
import { Theme } from '@/types/theme'
import { getStorageTheme, setStorageTheme } from '@/utils/themeStorage'

export default function ThemeToggle() {
    const [theme, setTheme] = useState<Theme>('light')
    useEffect(()=> {
        const current: Theme = getStorageTheme()
        setTheme(current)
        document.documentElement.classList.add(current)
    }, [])

    const toggleThemeAction = () => {
        
        if(theme == "light") {
            document.documentElement.classList.add('dark')
            setTheme('dark')
            setStorageTheme('dark')
        } else {
            document.documentElement.classList.remove('dark')
            setTheme('light')
            setStorageTheme('light')
        }
    }

    return (
        <div className='absolute top-8 right-8'>
            
            <button onClick={toggleThemeAction}>
                { theme == 'light' ? (
                    <Dark className="h-6 w-6 fill-light-header"></Dark>
                ) : (
                    <Light className="h-6 w-6 fill-dark-header"></Light>
                )}
                
            </button> 
        </div>
    )
}