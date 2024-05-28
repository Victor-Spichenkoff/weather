"use client"

import ThemeToggle from '@/components/functions/theme'

export default function Header() {
    return (
        <header className="border-b-2  border-b-gray-700 p-8 text-center relative">
            <h1 className="text-2xl">Clima Agora</h1>
            <ThemeToggle/>
        </header>
    )
}