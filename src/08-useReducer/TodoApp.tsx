import TodoAdd from './components/TodoAdd';
import TodoList from './components/TodoList';
import { useTodo } from '../hooks/useTodo';

type Props = {};
export type TodoState = {
  id: number;
  description: string;
  done: boolean;
};

const TodoApp = (props: Props) => {
  const {
    deleteTodo,
    pendingTodosCount,
    onNewTodo,
    onToggleTodo,
    state,
    todosCount,
  } = useTodo();

  const pendingTodos = state.filter((todo) => !todo.done);
  return (
    <section className="container mx-auto">
      <h1>
        TodoApp: {todosCount}, <small>pendientes: {pendingTodosCount}</small>
      </h1>
      <hr />

      <section className="grid grid-cols-2 mt-2 gap-4">
        <TodoList
          state={state}
          deleteTodo={deleteTodo}
          onToggleTodo={onToggleTodo}
        />
        <TodoAdd onNewTodo={onNewTodo} state={state} />
      </section>
    </section>
  );
};
export default TodoApp;
