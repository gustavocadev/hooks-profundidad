import { useRef } from 'react';

type Props = {};
const FocusScreen = (props: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <>
      <h1>Focus Screen</h1>

      <input
        type="text"
        placeholder="Ingrese su nombre"
        className="p-2 bg-gray-900 rounded w-full text-white mt-2 text-xl"
        ref={inputRef}
      />
      <button onClick={() => inputRef.current?.select()}>Set Focus</button>
    </>
  );
};
export default FocusScreen;
