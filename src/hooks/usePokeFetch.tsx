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
    const abortController = new AbortController();
    const signal = abortController.signal;
    const effect = async () => {
      setIsLoading(true);
      setError(false);
      try {
        const result = await fetch(url, { signal: abortController.signal });
        const res = await result.json();
        setPokemon((prevPokemon: Species[]) => [
          ...prevPokemon,
          ...res.results.map(p => p.url)
        ]);
        setHasMore(res.next);
        setIsLoading(false);
      } catch (error) {
        if (signal.aborted) return;
        setError(true);
      }
    };
    effect();
    return () => abortController.abort();
  }, [url]);

  return { isLoading, error, pokemon, hasMore };
}
