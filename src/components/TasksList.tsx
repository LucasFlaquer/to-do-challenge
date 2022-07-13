import { EmptyTasks } from './EmptyTasks';
import styles from './TasksList.module.scss'
import { TaskItem } from './TaskItem';

export function TasksList() {
  const task = {
    id: 1,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    finished: false
  }
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
      <EmptyTasks />
      <ul className={styles.tasks}>
        <TaskItem task={task} />
      </ul>
    </>
  )
}