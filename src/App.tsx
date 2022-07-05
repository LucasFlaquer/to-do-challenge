import { Header } from './components/Header'
import { NewTask } from './components/NewTask'
import { TasksList } from './components/TasksList'
import './global.scss'
function App() {


  return (
    <div className="App">
      <Header />
      <div className="container">
        <NewTask />
        <TasksList />
      </div>
    </div>
  )
}

export default App
