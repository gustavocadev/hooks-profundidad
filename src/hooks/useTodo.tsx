import { useEffect, useReducer } from 'react';
import { TodoState } from '../08-useReducer/TodoApp';
import { todoReducer } from '../08-useReducer/todoReducer';

const INITIAL_STATE: TodoState[] = [
  {
    id: 1,
    description: 'Recolectar la piedra del alma',
    done: false,
  },
  {
    id: 2,
    description: 'Recolectar el piedra del tiempo',
    done: false,
  },
];

const init = () => {
  const todos = JSON.parse(localStorage.getItem('todos') ?? '[]');
  return todos;
};

export const useTodo = () => {
  const [state, dispatch] = useReducer(todoReducer, INITIAL_STATE, init);

  const pendingTodosCount = state.filter((todo) => !todo.done).length;
  const todosCount = state.length;

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify([...state]));
  }, [state]);

  // actions
  const onNewTodo = (todo: TodoState) => {
    dispatch({
      type: 'ADD_TODO',
      payload: todo,
    });
  };

  const deleteTodo = (id: number) => {
    const newTodo = state.filter((todo) => todo.id !== id);
    dispatch({
      type: 'DELETE_TODO',
      payload: newTodo,
    });
  };
  const onToggleTodo = (id: number) => {
    const updatedTodos = state.map((todo) => {
      if (todo.id !== id) return todo;

      return {
        ...todo,
        done: !todo.done,
      };
    });
    dispatch({
      type: 'TOGGLE_TODO',
      payload: updatedTodos,
    });
  };

  return {
    state,
    onNewTodo,
    deleteTodo,
    onToggleTodo,
    pendingTodosCount,
    todosCount,
  };
};
