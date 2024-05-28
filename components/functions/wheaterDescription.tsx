import { WeatherInfos } from "@/types/wheaterResponse";
type WheaterDescription = {
    wheatherInfos: WeatherInfos
}
import a from '@/assets/imgs/rain.png'
export default function WheaterDescription({wheatherInfos}: WheaterDescription) {
    if(wheatherInfos == null || wheatherInfos == 'error') return ''
    const getIcon = (): string => {
        const current = wheatherInfos.current.condition.text
        // if(current == ''){}
        //chuva
        if(current.includes('Chuva') || current == 'Garoa' || current.includes('Tempestade' || current=='Granizo')) return '/assets/imgs/rain.png'
        //sol
        if(current== 'Céu limpo'|| current == "Ensolarado") return '/assets/imgs/clear.png'
        //nublado
        if(current == "Encoberto" || current == 'Neblina' || current == "Névoa") return '/assets/imgs/cloud.png'

        return '/assets/imgs/404.png'
    }

    const imgPath = getIcon()

    return (
    <div className="flex flex-col items-center flex-wrap">
        <img src={imgPath} alt="" className="w-52" />

        <div className="my-4 mt-5">
            {wheatherInfos.location.name}
        </div>
        <div>
            {wheatherInfos.current.condition.text}
        </div>
    </div>
    )
}