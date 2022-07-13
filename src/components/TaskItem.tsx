import { CheckCircle, Circle, Trash } from "phosphor-react";
import styles from './TaskItem.module.scss';
interface Task {
  id: number;
  description: string;
  finished: boolean;
}

interface Props {
  task: Task;
}

export function TaskItem({ task }: Props) {
  return (
    <li className={styles.task}>
      <button className={`${styles.taskBtn} ${styles.taskBtnChecked}`}>
        {
          task.finished ?
            <CheckCircle size={25} weight="fill" />
            :
            <Circle size={25} />
        }
      </button>
      <p>{task.description}</p>
      <Trash />
    </li>
  )
}