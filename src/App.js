// imports
import { nanoid } from 'nanoid'
import { useState } from 'react';

// styles
import './App.css';

// components
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList';

const CURRENT_TASKS = [
  {id: nanoid(), name: 'Eat', completed: false},
  {id: nanoid(), name: 'Sleep', completed: false},
  {id: nanoid(), name: 'Repeat', completed: false}
]

function App() {
  const [currentTasks, setCurrentTasks] = useState(CURRENT_TASKS)

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
      <h1>Bucket List</h1>
      <TaskForm addTask={addTask}/>
      <TaskList currentTasks={currentTasks} toggleTaskCompleted={toggleTaskCompleted} handleDelete={handleDelete}/>
    </div>
  );
}

export default App;
