import useCounter from '../hooks/useCounter';

type Props = {};
const CounterWithCustomHook = (props: Props) => {
  const { counter, increment, decrement, reset } = useCounter();
  return (
    <div className="container mx-auto">
      <h1>Counter with hook: {counter}</h1>
      <button className="bg-blue-500 px-4 py-2" onClick={() => decrement()}>
        -1
      </button>
      <button className="bg-blue-500 px-4 py-2 mx-2" onClick={reset}>
        Reset
      </button>
      <button className="bg-blue-500 px-4 py-2" onClick={() => increment()}>
        +1
      </button>
    </div>
  );
};
export default CounterWithCustomHook;
