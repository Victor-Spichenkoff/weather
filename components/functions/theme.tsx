import { useEffect, useState } from 'react'
import Dark from '@/assets/icons/dark.svg'
import Light from '@/assets/icons/ligth.svg'
import { Theme } from '@/types/theme'
import { getTheme } from '@/utils/themeStorage'

export default function ThemeToggle() {
    const [theme, setTheme] = useState<Theme>('light')
    useEffect(()=> {
        const current: Theme = getTheme()
        setTheme(current)
    }, [])

    const toggleThemeAction = () => {
        if(theme == "light") {
            document.documentElement.classList.add('dark')
            setTheme('dark')
            setTheme('dark')
        } else {
            document.documentElement.classList.remove('dark')
            setTheme('light')
            setTheme('light')
        }
        console.log(theme)
        console.log(document.documentElement.classList)
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