import useCounter from '../hooks/useCounter';
import Small from './Small';
import { useState, memo } from 'react';
type Props = {};

const Memorize = (props: Props) => {
  const { counter, increment } = useCounter(10);
  const [show, setShow] = useState(true);
  return (
    <div>
      <h1>
        Counter: <Small value={counter} />
      </h1>
      <hr />

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
export default Memorize;
