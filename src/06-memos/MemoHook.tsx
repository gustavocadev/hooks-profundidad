import useCounter from '../hooks/useCounter';
import { useMemo, useState } from 'react';
type Props = {};

const heavyStock = (iterationNumber: number = 100) => {
  for (let i = 0; i < iterationNumber; i++) {
    console.log('ahi vamos...');
  }
  return `${iterationNumber} iteraciones realizadas`;
};

const MemoHook = (props: Props) => {
  const { counter, increment } = useCounter(4000);
  const [show, setShow] = useState(true);
  const memorizedValue = useMemo(() => heavyStock(counter), [counter]);
  return (
    <div>
      <h1>
        Counter: <small>{counter}</small>
      </h1>
      <hr />
      <h4>{memorizedValue}</h4>

      <button
        className="p-2 bg-gray-900 rounded w-full text-white mt-2 text-xl"
        onClick={() => increment()}
      >
        +1
      </button>

      <button
        className="p-2 bg-gray-900 rounded w-full text-white mt-2 text-xl"
        onClick={() => setShow(!show)}
      >
        Show/Hide {JSON.stringify(show)}
      </button>
    </div>
  );
};
export default MemoHook;
