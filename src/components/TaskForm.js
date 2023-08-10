// imports
import { useState } from 'react'

// styles
import './taskForm.css'

export default function TaskForm() {
    const [newTask, setNewTask] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(newTask)
    }

  return (
    <form onSubmit={handleSubmit} className="task_form">
        <h2>
            <label htmlFor="task_form_input">
                Add new task
            </label>
        </h2>
        <input
            type="text"
            id="task_form_input"
            autoComplete="off"
            onChange={(e) => setNewTask(e.target.value)}
            value={newTask}
        />
        <button className="btn" type="submit">
            Add
        </button>
    </form>
  )
}
