import React, { useEffect, useState, useRef, useCallback } from "react";
import PokemonCard from "../PokemonCard";
import { StyledContainer, StyledBtn } from "./style";
import usePokeFetch from "../../hooks/usePokeFetch";
import { HourGlassSpinner } from "../Spinner/style";

let uuid = 999999;

const HomePage = (): JSX.Element => {
  const observer: any = useRef() as React.MutableRefObject<HTMLInputElement>;
  const [pokemonData, setPokemonData] = useState<PokemonVerbose[]>([]);
  const [genNumber, setGenNumber] = useState<number>(1);
  const [url, setUrl] = useState(
    `https://pokeapi.co/api/v2/pokemon/?offset=0&limit=6`
  );
  const { isLoading, pokemon: pokemonUrls, hasMore } = usePokeFetch(url);

  const withinGenerationLimit = () => true;

  const lastPokemonRef = useCallback(
    node => {
      if (isLoading) return;
      if (observer?.current) observer.current?.disconnect();
      observer.current = new IntersectionObserver(
        entries => {
          if (entries[0].isIntersecting && hasMore && withinGenerationLimit()) {
            setUrl(hasMore);
          }
        },
        { rootMargin: "-600px" }
      );
      if (node) observer.current.observe(node);
    },
    [isLoading, hasMore]
  );

  useEffect(() => {
    const fetchRequiredPokemonData = async () => {
      const pokeList = pokemonUrls.map(async (pokeUrl: string) => {
        try {
          const result = await fetch(pokeUrl);
          const pokedexData = await result.json();
          const { species, id, types, abilities, stats, sprites } = pokedexData;
          return { species, id, types, abilities, stats, sprites };
        } catch {
          return {
            species: null,
            id: uuid++,
            types: null,
            abilities: null,
            stats: null,
            sprites: null
          };
        }
      });
      const list = await Promise.all(pokeList);
      setPokemonData(prevPoke => [...prevPoke, ...list]);
    };
    fetchRequiredPokemonData();
  }, [pokemonUrls]);

  return (
    <>
      <StyledContainer>
        <>
          <div style={{ width: "100%" }}>
            <StyledBtn
              type="button"
              onClick={() => {
                if (genNumber < 8) {
                  setGenNumber(genNumber + 1);
                } else {
                  setGenNumber(1);
                }
              }}
            >
              Next Generation
            </StyledBtn>
            {genNumber}
          </div>
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
          {isLoading && (
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100px",
                padding: "10px"
              }}
            >
              <HourGlassSpinner />
            </div>
          )}
        </>
      </StyledContainer>
    </>
  );
};

export default HomePage;
