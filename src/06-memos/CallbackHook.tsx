import { useCallback, useState } from 'react';
import ShowIncrement from './ShowIncrement';
type Props = {};
const CallbackHook = (props: Props) => {
  const [counter, setCounter] = useState(10);
  // const increment = () => setCounter(counter + 1);
  const increment = useCallback((value: number) => {
    setCounter((previousCounter) => previousCounter + value);
  }, []);

  return (
    <div>
      <h1>useCallback Hook: {counter}</h1>
      <hr />
      <ShowIncrement increment={increment} />
    </div>
  );
};
export default CallbackHook;
