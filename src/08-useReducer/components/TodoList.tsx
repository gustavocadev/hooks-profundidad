import type { TodoState } from '../TodoApp';
import TodoItem from './TodoItem';

type Props = {
  state: TodoState[];
  deleteTodo: (id: number) => void;
  onToggleTodo: (id: number) => void;
};
const TodoList = ({ state, deleteTodo, onToggleTodo }: Props) => {
  return (
    <ul className=" ">
      {state.map((todo: TodoState) => {
        return (
          <TodoItem
            key={todo.id}
            todo={todo}
            deleteTodo={deleteTodo}
            onToggleTodo={onToggleTodo}
          />
        );
      })}
    </ul>
  );
};
export default TodoList;
