import React, { useState } from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    function toggleMenu() {
        setIsMenuOpen(!isMenuOpen)
    }
    return (
        <nav className="bg-blue-500">
            <div className="container mx-auto px-1">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <a href="/" className="text-white font-bold text-lg">Learn your way</a>
                    </div>

                    <div className="block lg:hidden md:hidden ">
                        <div className="fixed  top-4 right-8">
                            <button
                                className="flex items-center px-3 py-2 border rounded text-white-600 border-white-600 hover:text-white hover:border-white"
                                onClick={toggleMenu}
                            >
                                <svg
                                    className="fill-current h-3 w-3"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M0 3h20v2H0V3zm0 5h20v2H0V8zm0 5h20v2H0v-2z"
                                        fillRule="evenodd"
                                    />
                                </svg>
                            </button>
                        </div>

                        {/* mobile menu */}
                        {isMenuOpen && (
                            <div className="w-20 mt-28 bg-gray-100 rounded-md shadow">
                                <ul className="w-12">
                                    <li>
                                        <Link className="px-4 py-2 border-b border-gray-200 last:border-b-0" to="/">Home</Link>

                                    </li>
                                    <li>
                                        <Link className="px-4 py-2 border-b border-gray-200 last:border-b-0" to="/todo">ToDo</Link>
                                    </li>
                                    <li>
                                        <Link className="px-4 py-2 border-b border-gray-200 last:border-b-0" to="/weather">Weather</Link></li>
                                </ul>
                            </div>
                        )}
                    </div>


                    <div className="hidden md:flex lg:flex">
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