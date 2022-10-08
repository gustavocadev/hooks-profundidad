import { useState } from 'react';

const useCounter = (initialValue: number = 10) => {
  const [counter, setCounter] = useState(initialValue);

  const increment = (value: number = 1) => setCounter(counter + value);
  const decrement = (value: number = 1) =>
    setCounter(Math.max(counter - value, 0));
  const reset = () => setCounter(initialValue);

  return {
    counter,
    increment,
    decrement,
    reset,
  };
};
export default useCounter;
