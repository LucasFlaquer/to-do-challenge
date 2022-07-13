import { useState } from 'react'
import { Header } from './components/Header'
import { NewTask } from './components/NewTask'
import { Task } from './components/TaskItem'
import { TasksList } from './components/TasksList'
import './global.scss'


function App() {
  const [tasks, setTasks] = useState<Task[]>([])
  function onCreateTask(description: string) {
    const newTask = { id: tasks.length, description, finished: false }
    setTasks([...tasks, newTask])
  }
  function onToggleTask(id: number) {
    console.log('toggle task')
  }
  function onTaskDelete(id: number) {
    console.log('delete task')
  }

  return (
    <div className="App">
      <Header />
      <div className="container">
        <NewTask />
        <TasksList
          tasks={tasks}
          onToggleTask={onToggleTask}
          onTaskDelete={onTaskDelete}
        />
      </div>
    </div>
  )
}

export default App
