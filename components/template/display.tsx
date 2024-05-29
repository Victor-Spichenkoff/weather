import { useState } from "react"
import Search from "../functions/search"
import { WeatherInfos } from "@/types/wheaterResponse"
import WheaterDescription from "../functions/wheaterDescription"

export default function Display() {
    const [wheaterInfos, setWeatherInfos] = useState<WeatherInfos>(null)
    return (
        <div className="bg-dark text-dark-header dark:bg-light dark:text-light-txt max-w-2xl p-4 rounded-lg text-center">
            <Search setWeatherInfos={setWeatherInfos}></Search>
            { wheaterInfos !== 'error' && wheaterInfos !== null && (
                <WheaterDescription wheatherInfos={wheaterInfos}/>
            ) }

            {wheaterInfos == 'error' && (
                <div>
                    Erro de busca
                </div>
            )}
            
        </div>
    )
}