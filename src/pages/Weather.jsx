import React, { useState } from "react"
import Navbar from "../components/Navbar"
import { fetchWeather } from "../service/weather"

export const WeatherPage = () => {
    const [inputValue, setInputValue] = useState("")
    const [weather, setWeather] = useState(null)
    const checkWeather = async () => {
        if (inputValue) {
            const resp = await fetchWeather(inputValue)
            setWeather(resp)
            setInputValue("")
        }
    }
    return (
        <div className="bg-gray-200 h-screen">
            <Navbar />
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-lg underline">Ask weather</h1>
                <input
                    type="text"
                    className="mt-4 py-2 px-4 mb-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <button className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600" onClick={checkWeather}>Check Weather</button>

                {weather && (
                    <div className=" mt-4 flex flex-col items-center justify-center border border-gray-400 rounded-md p-4 text-gray-600">
                        <h2>Weather on {weather.name}:</h2>
                        <h3>{(weather.weather[0].description)}</h3>
                        <h3>{Math.round(weather.main.temp - 273)}°C</h3>
                    </div>
                )}
            </div>
        </div>
    )
}