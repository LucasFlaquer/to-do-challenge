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
    const tasksUpdated = tasks.map(task => {
      if (task.id === id) {
        return { ...task, finished: !task.finished }
      }
      return task
    })
    setTasks(tasksUpdated)
  }
  function onTaskDelete(id: number) {
    console.log('delete task')
  }

  return (
    <div className="App">
      <Header />
      <div className="container">
        <NewTask onCreateTask={onCreateTask} />
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
