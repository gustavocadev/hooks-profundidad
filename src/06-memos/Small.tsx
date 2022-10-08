import { memo } from 'react';
type Props = {
  value: number;
};

const Small = memo(({ value }: Props) => {
  console.log('Me volvi a generar :)');
  return <small>{value}</small>;
});
export default Small;
