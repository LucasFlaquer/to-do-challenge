import { EmptyTasks } from './EmptyTasks';
import styles from './TasksList.module.scss'
import { TaskItem } from './TaskItem';

const tasks = [
  {
    id: 1,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    finished: false
  },
  {
    id: 2,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    finished: false
  },
]
export function TasksList() {
  const finishedTasks = tasks.filter(task => task.finished)
  return (
    <>
      <header className={styles.tasksHeader}>
        <p className={styles.createdTasks}>
          <strong>Tarefas Criadas</strong>
          <span>{tasks.length}</span>
        </p>
        <p className={styles.finishedTasks}>
          <strong>Concluídas</strong>
          <span>{finishedTasks.length}</span>
        </p>
      </header>
      {tasks.length === 0 ? <EmptyTasks /> : (
        <ul className={styles.tasks}>
          {tasks.map(task => (<TaskItem key={task.id} task={task} />))}
        </ul>
      )}
    </>
  )
}