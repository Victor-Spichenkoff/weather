import { WeatherInfos } from "@/types/wheaterResponse"
import Image from "next/image"
import HumidityIcon from '@/assets/icons/humidity.svg'
import AirIcon from '@/assets/icons/air.svg'
import { publicStart } from "@/global"

type WheaterDescription = {
    wheatherInfos: WeatherInfos
}



export default function WheaterDescription({wheatherInfos}: WheaterDescription) {
    if(wheatherInfos == null || wheatherInfos == 'error') return ''


    const getIcon = (): string => {
        const current = wheatherInfos.current.condition.text
        // if(current == ''){}
        //chuva
        if(current.includes('Chuva') || current == 'Garoa' || current.includes('Tempestade') || current=='Granizo' || current=="Aguaceiros fracos") return '/assets/imgs/rain.png'
        //sol
        if(current== 'Céu limpo'|| current == "Ensolarado") return '/assets/imgs/clear.png'
        //nublado
        if(current == "Encoberto" || current == "Névoa" || current.toLowerCase().includes('nublado')) return '/assets/imgs/cloud.png'
        //vento/neblina
        if(current=='Vento' || current == 'Neblina' || current == 'Fumacento') return '/assets/imgs/mist.png'
        //neve
        if(current == 'Neve') return './assets/imgs/snow.png'

        return '/assets/imgs/404.png'
    }


    const imgPath = getIcon()
    

    return (
    <div className="flex flex-col items-center flex-wrap">
        <Image src={`${publicStart}${imgPath}`} alt="" className="w-52" width={208} height={208}/>

        {/* Topo */}
        <div className="-ml-2 text-5xl relative">
            {wheatherInfos.current.temp_c}<span className="text-xl absolute top-1 -right-5">&deg;C</span>
        </div>
        <div className="text-2xl">
            {wheatherInfos.current.condition.text}
        </div>

        <div className="flex justify-between w-full p-4 text-sm mt-8">
            <div className="flex">
                <div className="flex items-center">
                    <HumidityIcon className="dark:fill-dark size-8"/>
                </div>
                <div className="ml-1 font-bold">
                    <div className="text-start">{wheatherInfos.current.humidity}%</div>
                    <div className="text-xs ">Humidity</div>
                </div>
            </div>

            <div className="flex ml-16">
                <div className="flex items-center">
                    <AirIcon className="dark:fill-dark size-8"/>
                </div>
                <div className="ml-1 font-bold">
                    <div className="text-start">{wheatherInfos.current.wind_kph}Km/h</div>
                    <div className="text-xs ">Wind Speed</div>
                </div>
            </div>
        </div>
    </div>
    )
}