import React, { useEffect, useState, useRef, useCallback } from "react";
import PokemonCard from "../PokemonCard";
import { StyledContainer, PokeballContainer } from "./style";
import usePokeFetch from "../../hooks/usePokeFetch";
import HourGlass from "../Spinner";

let uuid = 999999;

const HomePage = (): JSX.Element => {
  const observer: any = useRef() as any;
  const [pokemonData, setPokemonData] = useState<PokemonVerbose[]>([]);
  const [isPokemonInfoLoading, setIsPokemonInfoLoading] = useState<boolean>(
    false
  );
  const [url, setUrl] = useState(
    `https://pokeapi.co/api/v2/pokemon/?offset=0&limit=18`
  );
  const {
    isLoading: isPokemonListLoading,
    pokemon: pokemonUrls,
    hasMore
  } = usePokeFetch(url);

  const lastPokemonRef = useCallback(
    node => {
      if (isPokemonListLoading) return;
      if (observer?.current) observer.current?.disconnect();
      observer.current = new IntersectionObserver(
        entries => {
          if (entries[0].isIntersecting && hasMore) {
            setUrl(hasMore);
          }
        },
        { rootMargin: "-50px" }
      );
      if (node) observer.current.observe(node);
    },
    [isPokemonListLoading, hasMore]
  );

  useEffect(() => {
    const fetchRequiredPokemonData = async () => {
      setIsPokemonInfoLoading(true);
      const pokeList = pokemonUrls.map(async (pokeUrl: string) => {
        try {
          const result = await fetch(pokeUrl);
          const pokedexData = await result.json();
          const { species, id, types, sprites } = pokedexData;
          return { species, id, types, sprites };
        } catch {
          return {
            species: null,
            id: uuid++,
            types: null,
            sprites: null
          };
        }
      });
      const list = await Promise.all(pokeList);
      setPokemonData(prevPoke => [...prevPoke, ...list]);
      setIsPokemonInfoLoading(false);
    };
    fetchRequiredPokemonData();
  }, [pokemonUrls]);

  return (
    <StyledContainer>
      {pokemonData.map((pokemon, index) => {
        if (pokemonData.length === index + 1) {
          return (
            <PokemonCard
              pokemon={pokemon}
              key={pokemon.id}
              ref={lastPokemonRef}
            />
          );
        }
        return <PokemonCard pokemon={pokemon} key={pokemon.id} />;
      })}
      <PokeballContainer>
        {(isPokemonInfoLoading || isPokemonListLoading) && <HourGlass />}
      </PokeballContainer>
    </StyledContainer>
  );
};

export default HomePage;
