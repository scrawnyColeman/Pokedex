import React, { useEffect, useState } from "react";
import PokemonCard from "../PokemonCard";
import { StyledContainer } from "./style";

interface PokemonVerbose {
  species?: species;
  order: number;
  types?: types;
  abilities?: abilities;
  stats?: stats;
  sprites?: sprites;
}
type Pokemon = species;

let uuid = 999999;

const HomePage = (): JSX.Element => {
  const [pokemonData, setPokemonData] = useState<PokemonVerbose[]>([]);
  const [isLoading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchRequiredPokemonData = async (): Promise<void> => {
      setLoading(true);
      const result = await fetch(
        "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20"
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
              order: uuid++
            };
          }
        }
      );
      setPokemonData(await Promise.all(pokeList));
      setLoading(false);
    };
    fetchRequiredPokemonData();
  }, []);

  return (
    <StyledContainer>
      {isLoading ? (
        <div>Loading</div>
      ) : (
        pokemonData.map(pokemon => (
          <PokemonCard pokemon={pokemon} key={pokemon.order} />
        ))
      )}
    </StyledContainer>
  );
};

export default HomePage;
