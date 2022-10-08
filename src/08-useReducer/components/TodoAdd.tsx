import { useState, useEffect } from 'react';
import { TodoState } from '../TodoApp';
type Props = {
  onNewTodo: (description: TodoState) => void;
  state: TodoState[];
};
const TodoAdd = ({ onNewTodo, state }: Props) => {
  const [description, setDescription] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (description.length === 0) return;

    const newTodo = {
      id: state.length + 1,
      description,
      done: false,
    };
    onNewTodo(newTodo);

    setDescription('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-xl font-semibold">Agregar TODO</h2>
      <hr />
      <input
        type="text"
        name="description"
        placeholder="Que quieres hacer?"
        className="p-2 rounded block w-full mt-2"
        value={description}
        onChange={(e) => setDescription(e.currentTarget.value)}
      />
      <button className="mt-2">Agregar</button>
    </form>
  );
};
export default TodoAdd;
