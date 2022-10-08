import { useState } from 'react';
type Props = {};
const CounterApp = (props: Props) => {
  const [counter, setCounter] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30,
  });

  const { counter1, counter2, counter3 } = counter;
  return (
    <section className="container mx-auto">
      <h1>Counter: {counter1}</h1>
      <h1>Counter: {counter2}</h1>
      <h1>Counter: {counter3}</h1>

      <hr />

      <div className="my-2 p-4">
        <button
          onClick={() =>
            setCounter({
              ...counter,
              counter1: counter1 + 1,
            })
          }
        >
          +1
        </button>
        <button>-1</button>
      </div>
    </section>
  );
};
export default CounterApp;
