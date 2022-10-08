type Props = {
  quote: string;
  author: string;
};
const Quote = ({ quote, author }: Props) => {
  return (
    <blockquote>
      <p>{quote}</p>
      <footer className="">{author}</footer>
    </blockquote>
  );
};
export default Quote;
