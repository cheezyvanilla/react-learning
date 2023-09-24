import React from 'react'
import ToDoApp from './components/ToDo'
import Navbar from './components/Navbar'
import { Home } from './pages/Home'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { TodoPage } from './pages/Todo'
import { WeatherPage } from './pages/Weather'

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/todo" element={<TodoPage />} />
                <Route path="/weather" element={<WeatherPage />} />
            </Routes>
        </Router>
    )
}

export default App
