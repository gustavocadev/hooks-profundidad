import { createContext } from 'react';

type ContextProps = {
  id: number;
  name: string;
  email: string;
};

export const UserContext = createContext({} as ContextProps);
