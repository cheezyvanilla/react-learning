import React from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <nav className="bg-blue-500">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <a href="/" className="text-white font-bold text-lg">Learn your way</a>
                    </div>

                    <div className="hidden md:flex">
                        {/* <a href="/" className="text-white mx-2 hover:text-gray-200">Home</a>
                        <a href="/" className="text-white mx-2 hover:text-gray-200">About</a>
                        <a href="/" className="text-white mx-2 hover:text-gray-200">Services</a>
                        <a href="/" className="text-white mx-2 hover:text-gray-200">Contact</a> */}
                        <Link className="text-white mx-2 hover:text-gray-200" to="/">Home</Link>
                        <Link className="text-white mx-2 hover:text-gray-200" to="/todo">ToDo</Link>
                        <Link className="text-white mx-2 hover:text-gray-200" to="/weather">Weather</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar