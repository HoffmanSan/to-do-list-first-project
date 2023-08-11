// imports
import { useState } from 'react'

// styles
import './taskForm.css'

export default function TaskForm({ addTask={addTask} }) {
    const [newTask, setNewTask] = useState('')
    const [error, setError] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!newTask) {
            setError(true)
            return
        }
        addTask(newTask)
        setNewTask('')
        setError(false)
    }

  return (
    <form onSubmit={handleSubmit} className="task_form">
        <h2>
            <label htmlFor="task_form_input">Add new task</label>
        </h2>
        <input
            type="text"
            id="task_form_input"
            autoComplete="off"
            onChange={(e) => setNewTask(e.target.value)}
            value={newTask}
        />
        {error && <p className="error_paragraph">Please add a task name</p>}
        <button type="submit">Add</button>
    </form>
  )
}
