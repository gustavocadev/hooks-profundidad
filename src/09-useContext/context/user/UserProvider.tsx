import { ReactNode, useReducer } from 'react';
import { UserContext, userReducer } from './';

export type UserState = {
  id: number;
  name: string;
  email: string;
};

const USER_INITIAL_STATE: UserState = {
  name: 'John Doe',
  email: 'john@gmai.com',
  id: 1,
};

type Props = {
  children: ReactNode;
};

export const UserProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(userReducer, USER_INITIAL_STATE);

  return (
    <UserContext.Provider
      value={{
        ...state,
        // actions
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
