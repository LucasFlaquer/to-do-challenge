import Clipboard from '../assets/Clipboard.svg'
import styles from './TasksList.module.scss'
interface Task {
  id: number;
  description: string;
  finished: boolean;
}
export function TasksList() {
  return (
    <>
      <header className={styles.tasksHeader}>
        <p className={styles.createdTasks}>
          <strong>Tarefas Criadas</strong>
          <span>0</span>
        </p>
        <p className={styles.finishedTasks}>
          <strong>Concluídas</strong>
          <span>0</span>
        </p>
      </header>
      <div className={styles.emptyTasks}>
        <img src={Clipboard} alt="" />
        <p>
          <strong>Você ainda não tem tarefas cadastradas</strong>
        </p>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
      <ul>
        <li>
          <input type="checkbox" name="" id="" />
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis, ullam?</p>
          <span>icon trash</span>
        </li>
      </ul>
    </>
  )
}