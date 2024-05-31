import Image from "next/image"
import { useState } from "react"
import Search from "../functions/search"
import { WeatherInfos } from "@/types/wheaterResponse"
import WheaterDescription from "../functions/wheaterDescription"


const wheaterInfosMoked: WeatherInfos = {
    "location": {
        "name": "Sao Paulo",
        "region": "Sao Paulo",
        "country": "Brazil",
        "lat": -23.53,
        "lon": -46.62,
        "tz_id": "America/Sao_Paulo",
        "localtime_epoch": 1716905536,
        "localtime": "2024-05-28 11:12"
    },
    "current": {
        "last_updated_epoch": 1716904800,
        "last_updated": "2024-05-28 11:00",
        "temp_c": 19.0,
        "temp_f": 66.2,
        "is_day": 1,
        "condition": {
            "text": "Nublado",
            "icon": "//cdn.weatherapi.com/weather/64x64/day/122.png",
            "code": 1009
        },
        "wind_mph": 10.5,
        "wind_kph": 16.9,
        "wind_degree": 290,
        "wind_dir": "WNW",
        "pressure_mb": 1021.0,
        "pressure_in": 30.15,
        "precip_mm": 0.01,
        "precip_in": 0.0,
        "humidity": 83,
        "cloud": 100,
        "feelslike_c": 19.0,
        "feelslike_f": 66.2,
        "windchill_c": 18.2,
        "windchill_f": 64.8,
        "heatindex_c": 18.2,
        "heatindex_f": 64.8,
        "dewpoint_c": 16.3,
        "dewpoint_f": 61.4,
        "vis_km": 10.0,
        "vis_miles": 6.0,
        "uv": 5.0,
        "gust_mph": 12.1,
        "gust_kph": 19.5
    }
}

export default function Display() {
    const [wheaterInfos, setWeatherInfos] = useState<WeatherInfos>(null)
    return (
        <div className="bg-dark text-dark-header dark:bg-light dark:text-light-txt max-w-2xl p-4 py-8 rounded-lg text-center">
            <Search setWeatherInfos={setWeatherInfos}></Search>
            <WheaterDescription wheatherInfos={wheaterInfosMoked}/>
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