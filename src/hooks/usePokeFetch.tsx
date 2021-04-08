// @ts-nocheck
import { useEffect, useState } from "react";

export default function usePokeFetch(url: string) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [pokemon, setPokemon] = useState([]);
  const [hasMore, setHasMore] = useState("");

  useEffect(() => {
    setPokemon([]);
  }, [url]);

  useEffect(() => {
    setIsLoading(true);
    setError(false);
    const abortController = new AbortController();
    const signal = abortController.signal;
    setTimeout(() => {
      fetch(url, { signal: abortController.signal }).then(res =>
        res
          .json()
          .then(res => {
            console.log(res);
            setPokemon((prevPokemon: Species[]) => {
              return [...prevPokemon, ...res.results.map(p => p.url)];
            });
            setHasMore(res.next);
            setIsLoading(false);
          })
          .catch(_ => {
            if (signal.aborted) return;
            setError(true);
          })
      );
    }, 5000);
    return () => abortController.abort();
  }, [url]);

  return { isLoading, error, pokemon, hasMore };
}
