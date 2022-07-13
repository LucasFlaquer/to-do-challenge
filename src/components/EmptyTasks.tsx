import Clipboard from '../assets/Clipboard.svg'
import styles from './EmptyTasks.module.scss'
export function EmptyTasks() {
  return (
    <div className={styles.emptyTasks}>
      <img src={Clipboard} alt="" />
      <p>
        <strong>Você ainda não tem tarefas cadastradas</strong>
      </p>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </div>
  )
}