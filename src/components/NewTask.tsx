import { PlusCircle } from "phosphor-react";
import { useState } from "react";
import style from './NewTask.module.scss'

interface Props {
  onCreateTask: (description: string) => void;
}

export function NewTask({ onCreateTask }: Props) {
  const [description, setDescription] = useState('')

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    onCreateTask(description);
    setDescription('');
  }

  return (
    <form className={style.newTask} onSubmit={handleSubmit}>
      <input
        value={description}
        onChange={e => setDescription(e.target.value)}
        placeholder="Adicione uma nova tarefa"
        required />
      <button type="submit">
        Criar
        <PlusCircle size={25} />
      </button>
    </form>
  )
}