// imports
import React from "react"

// styles
import './taskList.css'

export default function TaskList({ currentTasks, toggleTaskCompleted, handleDelete }) {
  
  return (
    <div className="task_list">
      <h3>{currentTasks.length} tasks remaining</h3>
      <ul>
        {currentTasks.map(task => (
          <React.Fragment key={task.id}>
            <li className="single_task">
              <input
                type="checkbox"
                onClick={() => toggleTaskCompleted(task.id)}
              />
              <h3>{task.name}</h3>
            </li>
            <div className="btn-group">
              <button onClick={() => handleDelete(task.id)}>
                Delete
              </button>
            </div>
          </React.Fragment>
        ))}
      </ul>
    </div>
  )
}
