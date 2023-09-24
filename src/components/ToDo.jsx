import React, { useState } from "react"
// import '../index.css'
const ToDoApp = () => {
    // state to manage list of tasks
    const [tasks, setTasks] = useState([])

    // state to manage the input value
    const [inputValue, setInputValue] = useState('')

    // function to add task to list
    const addTask = () => {
        if (inputValue) {
            setTasks([...tasks, inputValue])
            setInputValue('')
        }
    }

    // remove task
    const removeTask = (index) => {
        const updatedTasks = [...tasks]
        updatedTasks.splice(index, 1)
        setTasks(updatedTasks)
    }

    return (
        <div className="flex flex-col items-center  h-screen">
            <h1 className="text-lg underline mt-2">ToDo App</h1>

            <input
                className="mb-4 mt-4 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />

            <button className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600" onClick={addTask}>Add Task</button>

            {/* task lisk */}
            <ul className="w-64 mt-4 bg-gray-100 rounded-md shadow">
                {tasks.map((task, index) => (
                    <li className="px-4 py-2 border-b border-gray-200 last:border-b-0" key={index}>
                        {task}
                        <button className="ml-2 px-2 py-1 text-red-500 hover:text-red-700 focus:outline-none" onClick={() => removeTask(index)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>

    )
}

export default ToDoApp