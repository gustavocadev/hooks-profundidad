import { useState } from 'react';
import { TodoState } from '../TodoApp';
type Props = {
  todo: TodoState;
  deleteTodo: (id: number) => void;
  onToggleTodo: (id: number) => void;
};
const TodoItem = ({ todo, deleteTodo, onToggleTodo }: Props) => {
  return (
    <li
      className="flex justify-between border border-gray-600 rounded items-center px-2"
      key={todo.id}
    >
      <span
        onClick={() => onToggleTodo(todo.id)}
        className={`flex-1 cursor-pointer ${
          todo.done && 'line-through text-gray-400'
        }`}
      >
        {todo.description}
      </span>
      <button>
        <button
          className="px-4 py-2 bg-red-500 rounded"
          onClick={() => {
            deleteTodo(todo.id);
          }}
        >
          Borrar
        </button>
      </button>
    </li>
  );
};
export default TodoItem;
