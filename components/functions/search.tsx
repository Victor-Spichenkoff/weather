import { WeatherInfos } from "@/types/wheaterResponse"
import SearchIcon from "@/assets/icons/serach.svg"
import { useState } from "react"
import axios from "axios"

interface Search {
    setWeatherInfos: (weatherInfos: WeatherInfos) => void
}

export default function Search({ setWeatherInfos }: Search) {
    const [location, setlocation] = useState('')

    const search = async () => {
        try {
            const res = await axios(`http://api.weatherapi.com/v1/current.json?key=c043db88f0df4dbb94f224112242405&q=${location}&aqi=no&lang=pt`)
            const data:WeatherInfos = res.data
            setWeatherInfos(data)
            console.log(data)
        } catch {
            setWeatherInfos('error')
        }
    }

    return (
        <>
            <div className="inline p-2 text-2xl text-ligth-txt">
                <input type="text" className=" inline-block p-1 outline-none rounded-md max-w-48" placeholder="Local"
                    value={location} onChange={(e)=>setlocation(e.target.value)}
                />   
                <button className="hover:scale-110"
                    onClick={search}
                >
                    <SearchIcon className="fill-dark-txt dark:fill-light-txt ml-4 -mt-1 inline size-7
                        fill-black 
                    " />
                </button>
            </div>
        </>
    )
} 