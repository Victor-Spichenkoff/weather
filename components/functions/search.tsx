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
            <div className="inline p-2">
                <input type="text" className="text-black inline-block p-1 outline-none rounded-md" placeholder="Local"
                    value={location} onChange={(e)=>setlocation(e.target.value)}
                />   
                <button className="hover:scale-110"
                    onClick={search}
                >
                    <SearchIcon className="fill-light dark:fill-dark ml-4 inline
                        fill-black
                    " />
                </button>
            </div>
        </>
    )
} 