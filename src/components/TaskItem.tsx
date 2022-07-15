import { CheckCircle, Circle, Trash } from "phosphor-react";
import styles from './TaskItem.module.scss';
export interface Task {
  id: number;
  description: string;
  finished: boolean;
}

interface Props {
  task: Task;
  onToggleTask: (id: number) => void;
  onDeleteTask: (id: number) => void;
}

export function TaskItem({ task, onToggleTask, onDeleteTask }: Props) {
  const { id, finished, description } = task;

  function handleToggleTask() {
    onToggleTask(id);
  }

  function handleDeleteTask() {
    onDeleteTask(id);
  }

  return (
    <li className={`${styles.task} ${finished ? styles.taskFinished : ''}`}>
      <button className={styles.taskBtn} onClick={handleToggleTask}>
        {
          finished ?
            <CheckCircle size={25} weight="fill" />
            :
            <Circle size={25} />
        }
      </button>
      <p>{description}</p>
      <button className={styles.taskDelete} onClick={handleDeleteTask}>
        <Trash size={20} />
      </button>
    </li>
  )
}