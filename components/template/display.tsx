import Image from "next/image"
import { useState } from "react"
import Search from "../functions/search"
import { WeatherInfos } from "@/types/wheaterResponse"
import WheaterDescription from "../functions/wheaterDescription"
import { publicStart } from "@/global"


export default function Display() {
    const [weatherInfos, setWeatherInfos] = useState<WeatherInfos>(null)
    return (
        <div className="bg-dark text-dark-header dark:bg-light dark:text-light-txt max-w-2xl p-4 py-8 rounded-lg text-center">
            <Search setWeatherInfos={setWeatherInfos}></Search>
            { weatherInfos !== 'error' && weatherInfos !== null && (
                <WheaterDescription wheatherInfos={weatherInfos}/>
            ) }

            {weatherInfos == 'error' && (
                <div>
                    <div className="text-2xl mt-6 mb-4">Erro na busca</div>
                    <Image src={`${publicStart}/assets/imgs/404.png`} alt="IMG nada encontrado" width={208} height={208} className="mx-auto"></Image>
                </div>
            )}
            
        </div>
    )
}