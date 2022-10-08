import { memo } from 'react';
type Props = {
  increment: (value: number) => void;
};
const ShowIncrement = memo(({ increment }: Props) => {
  console.log('me volvi a renderizar :(');
  return (
    <button
      className=""
      onClick={() => {
        increment(5);
      }}
    >
      Incrementar
    </button>
  );
});
export default ShowIncrement;
