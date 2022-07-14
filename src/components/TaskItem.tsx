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
}

export function TaskItem({ task, onToggleTask }: Props) {
  const { id, finished, description } = task;

  function handleToggleTask() {
    onToggleTask(id);
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
      <Trash size={20} color='#808080' />
    </li>
  )
}