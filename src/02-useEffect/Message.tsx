import { useEffect } from 'react';

type Props = {};
const Message = (props: Props) => {
  useEffect(() => {
    console.log('message mounted');

    return () => {
      console.log('message unmounted');
    };
  }, []);
  return (
    <div>
      <h1>Usuario ya existe!</h1>
    </div>
  );
};
export default Message;
