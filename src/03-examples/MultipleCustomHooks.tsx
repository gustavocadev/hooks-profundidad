import { useFetch } from '../hooks/useFetch';
import useCounter from '../hooks/useCounter';
import LoadingQuote from './components/LoadingQuote';
import Quote from './components/Quote';
type Props = {};

const MultipleCustomHooks = (props: Props) => {
  const { counter, increment } = useCounter(1);

  const { data, isLoading, hasError } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );

  console.log({ data, isLoading, hasError });
  let existData = false;
  if (data) {
    existData = true;
  }
  const { quote, author } = existData && (data![0] as any);

  return (
    <>
      <h1>Breaking baad quotes</h1>
      <hr />

      {isLoading ? <LoadingQuote /> : <Quote quote={quote} author={author} />}

      <button className="" onClick={() => increment()}>
        Next Quote
      </button>
    </>
  );
};
export default MultipleCustomHooks;
