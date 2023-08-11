// imports
import { nanoid } from 'nanoid';
import { useState } from 'react';
import CheckIcon from './assets/checkmark.svg'

// styles
import './App.css';

// components
import TaskForm from './components/TaskForm';
import TaskList from './components/taskList';

const CURRENT_TASKS = [
  {id: nanoid(), name: 'Eat', completed: false},
  {id: nanoid(), name: 'Sleep', completed: false},
  {id: nanoid(), name: 'Repeat', completed: false}
]

const FILTERS = ['Completed', 'All',  "Uncompleted"]

function App() {
  const [currentTasks, setCurrentTasks] = useState(CURRENT_TASKS)
  const [filter, setFilter] = useState('All')

  const filteredTasks = currentTasks.filter(task => {
    switch (filter) {
      case 'Completed':
        if (task.completed) {
          return true;
        } 
          return false;
      case 'Uncompleted':
        if (!task.completed) {
          return true;
        }
          return false;
      default:
          return true;
    }})

  const toggleTaskCompleted = (id) => {
    const completeToggledTasks = currentTasks.map(task => {
      if(task.id === id){
        return { ...task, completed: !task.completed};
      }
        return task;
    });
    setCurrentTasks(completeToggledTasks);
  }

  const handleDelete = (id) => {
    const tasksAfterDeletion = currentTasks.filter(task => {
      if(task.id === id){
        return false;
      }
        return true;
    });
    setCurrentTasks(tasksAfterDeletion);
  }

  const addTask = (newTask) => {
    setCurrentTasks([ ...currentTasks, {id: nanoid(), name: newTask, completed: false }])
  }

  return (
    <div className="App">
      <div className="header">
        <h1>Bucket List</h1>
        <img className="list_icon" src={CheckIcon} alt="list icon" />
      </div>
      <TaskForm addTask={addTask} />
      <div className="filter_buttons">
        {FILTERS.map(filterName => (
        <button key={filterName} className={filterName === filter ? 'active' : ''}onClick={() => setFilter(filterName)}>{filterName}</button>
        ))}
      </div>
      <TaskList currentTasks={filteredTasks} toggleTaskCompleted={toggleTaskCompleted} handleDelete={handleDelete} filter={filter}/>
    </div>
  );
}

export default App;
