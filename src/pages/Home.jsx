import React from "react"
import Navbar from "../components/Navbar"

export const Home = () => {
    return (
        <div className="bg-gray-200 h-screen">
            <Navbar />
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-bold text-lg pt-10">This site contains todo app and weather check app</h1>
            </div>
        </div>
    )
}