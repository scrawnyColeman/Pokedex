import React, { useEffect, useState } from "react";
import PokemonCard from "../PokemonCard";
import { StyledContainer } from "./style";

interface PokemonVerbose {
  species: species;
  order: number;
  types: types;
  abilities: abilities;
  stats: stats;
  sprites: sprites;
}
type Pokemon = species;

const HomePage = (): JSX.Element => {
  const [pokemonData, setPokemonData] = useState<PokemonVerbose[]>([]);
  useEffect(() => {
    const fetchRequiredPokemonData = async () => {
      const result = await fetch(
        "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=5"
      );
      const pokedexListData = await result.json();
      const { results } = pokedexListData;
      const pokeList: Array<PokemonVerbose> = results.map(
        async (poke: Pokemon) => {
          const { url } = poke;
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
        }
      );
      setPokemonData(await Promise.all(pokeList));
    };
    fetchRequiredPokemonData();
  }, []);

  return (
    <StyledContainer>
      {pokemonData.map(pokemon => (
        <PokemonCard pokemon={pokemon} key={pokemon.order} />
      ))}
    </StyledContainer>
  );
};

export default HomePage;
