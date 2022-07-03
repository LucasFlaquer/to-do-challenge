import { PlusCircle } from "phosphor-react";
import style from './NewTask.module.scss'

export function NewTask() {
  return (
    <form className={style.newTask}>
      <input placeholder="Adicione uma nova tarefa" />
      <button type="submit">
        Criar
        <PlusCircle size={25} />
      </button>
    </form>
  )
}