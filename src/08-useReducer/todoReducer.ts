import type { TodoState } from './TodoApp';

type TodoAction =
  | {
      type: 'ADD_TODO';
      payload: TodoState;
    }
  | {
      type: 'DELETE_TODO';
      payload: TodoState[];
    }
  | {
      type: 'TOGGLE_TODO';
      payload: TodoState[];
    };

const todoReducer = (state: TodoState[], action: TodoAction) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, action.payload];
    case 'DELETE_TODO':
      return action.payload;
    case 'TOGGLE_TODO':
      return action.payload;
    default:
      return state;
  }
};
export { todoReducer };
