import React, { useEffect, useState } from "react";
import PokemonCard from "../PokemonCard";
import Spinner from "../Spinner";
import { StyledContainer } from "./style";
import { generations } from "../../data/generations";

type Pokemon = Species;
type generation = {
  number?: number;
  offset?: number;
  limit?: number;
};
let uuid = 999999;

const HomePage = (): JSX.Element => {
  const [pokemonData, setPokemonData] = useState<PokemonVerbose[]>([]);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [genNumber, setGenNumber] = useState<number>(1);

  const generation: generation =
    generations.find(gen => gen.number === genNumber) || {};

  const offset = generation?.offset;
  const limit = generation?.limit;

  useEffect(() => {
    const fetchRequiredPokemonData = async (): Promise<void> => {
      setLoading(true);
      const result = await fetch(
        `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`
      );
      const pokedexListData = await result.json();
      const { results } = pokedexListData;
      const pokeList: Array<PokemonVerbose> = results.map(
        async (poke: Pokemon) => {
          const { url } = poke;
          try {
            const result = await fetch(url);
            const pokedexData = await result.json();
            const {
              species,
              order,
              types,
              abilities,
              stats,
              sprites
            } = pokedexData;
            return { species, order, types, abilities, stats, sprites };
          } catch {
            return {
              species: null,
              order: uuid++,
              types: null,
              abilities: null,
              stats: null,
              sprites: null
            };
          }
        }
      );
      setPokemonData(await Promise.all(pokeList));
      setLoading(false);
    };
    fetchRequiredPokemonData();
  }, [offset, limit]);

  return (
    <>
      <StyledContainer>
        {isLoading ? (
          <Spinner />
        ) : (
          <>
            <div style={{ width: "100%" }}>
              <button
                type="button"
                onClick={() => {
                  if (genNumber <= 8) {
                    setGenNumber(genNumber + 1);
                  } else {
                    setGenNumber(1);
                  }
                }}
              >
                Next Generation
              </button>
            </div>
            {pokemonData.map(pokemon => (
              <PokemonCard pokemon={pokemon} key={pokemon.order} />
            ))}
          </>
        )}
      </StyledContainer>
    </>
  );
};

export default HomePage;
