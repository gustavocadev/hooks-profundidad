import { useEffect, useState } from 'react';
export function useFetch(url: string) {
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    hasError: null,
  });
  useEffect(() => {
    (async () => {
      setState({
        ...state,
        isLoading: true,
      });
      const resp = await fetch(url);
      const data = await resp.json();
      setState({
        data,
        isLoading: false,
        hasError: null,
      });
    })();
  }, [url]);

  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,
  };
}
