import { Header } from './components/Header'
import { NewTask } from './components/NewTask'
import './global.scss'
function App() {


  return (
    <div className="App">
      <Header />
      <div className="container">
        <NewTask />
      </div>
    </div>
  )
}

export default App
