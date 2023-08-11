// imports
import React from "react"

// styles
import './taskList.css'

export default function TaskList({ currentTasks, toggleTaskCompleted, handleDelete, filter }) {
  return (
    <div className="task_list">
      <h3 className="task_list_title">{filter} tasks</h3>
      <ul>
        {currentTasks.map(task => (
          <React.Fragment key={task.id}>
            <li className="task">
              <input
                id={task.id}
                type="checkbox"
                defaultChecked={task.completed ? true : false}
                onClick={() => toggleTaskCompleted(task.id)}
              />
              <label htmlFor={task.id}>
                <h3 className={`task_name ${task.completed ? 'crossed' : ''}`}>{task.name}</h3>
              </label>
            </li>
            <div className="delete_button_div">
              <button onClick={() => handleDelete(task.id)}>Delete</button>
            </div>
          </React.Fragment>
        ))}
      </ul>
    </div>
  )
}
