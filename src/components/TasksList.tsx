import { EmptyTasks } from './EmptyTasks';
import styles from './TasksList.module.scss'
import { Task, TaskItem } from './TaskItem';

interface Props {
  tasks: Task[];
  onToggleTask: (id: number) => void;
  onTaskDelete: (id: number) => void;
}

export function TasksList({ tasks, onToggleTask, onTaskDelete }: Props) {
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
          {
            tasks.map(task => (
              <TaskItem
                key={task.id}
                task={task}
                onToggleTask={onToggleTask}
              />
            ))
          }
        </ul>
      )}
    </>
  )
}