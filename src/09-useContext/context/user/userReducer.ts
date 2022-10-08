import { UserState } from './';

type UserAction = {
  type: 'ACTION_NAME';
  payload: string;
};

export const userReducer = (state: UserState, action: UserAction) => {
  switch (action.type) {
    case 'ACTION_NAME':
      return {
        ...state,
      };
    default:
      return state;
  }
};
