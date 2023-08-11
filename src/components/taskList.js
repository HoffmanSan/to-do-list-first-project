// imports
import React from "react"

// styles
import './taskList.css'

export default function TaskList({ currentTasks, toggleTaskCompleted, handleDelete }) {

  const uncompletedTasks = currentTasks.filter(task => {
    if(task.completed === false){
      return true;
    }
      return false;
  })
  
  return (
    <div className="task_list">
      <h3 className="list_title">{uncompletedTasks.length} tasks remaining</h3>
      <ul>
        {currentTasks.map(task => (
          <React.Fragment key={task.id}>
            <li className="single_task">
                <input
                  id={task.id}
                  type="checkbox"
                  onClick={() => toggleTaskCompleted(task.id)}
                />
                <label htmlFor={task.id}>
                  <h3 className="task_name">{task.name}</h3>
                </label>
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
