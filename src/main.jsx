import React from 'react'
import ReactDOM from 'react-dom/client'
import ToDoApp from './components/ToDo'
import './index.css'
import App from './App'
import { Home } from './pages/Home'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='bg-gray-200 max-w-full max-h-full'>
      <App />
    </div>
  </React.StrictMode>,
)
