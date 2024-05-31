import Image from "next/image"
import { useState } from "react"
import Search from "../functions/search"
import { WeatherInfos } from "@/types/wheaterResponse"
import WheaterDescription from "../functions/wheaterDescription"




export default function Display() {
    const [wheaterInfos, setWeatherInfos] = useState<WeatherInfos>(null)
    return (
        <div className="bg-dark text-dark-header dark:bg-light dark:text-light-txt max-w-2xl p-4 py-8 rounded-lg text-center">
            <Search setWeatherInfos={setWeatherInfos}></Search>
            <WheaterDescription wheatherInfos={wheaterInfos}/>
            { wheaterInfos !== 'error' && wheaterInfos !== null && (
            '') }

            {wheaterInfos == 'error' && (
                <div>
                    Erro de busca
                    <Image src='/assets/imgs/404.png' alt="IMG nada encontrado" width={208} height={208}></Image>
                </div>
            )}
            
        </div>
    )
}