import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  StyledContainer,
  StyledProfileCard,
  StyledProfileStatsWrapper,
  StyledProfileDisplayImgWrapper,
  StyledInfoCard
} from "./style";
import { types as pokemonTypes } from "../../data/types";

const PokemonProfile = (): JSX.Element => {
  const [data, setData] = useState({
    stats: null,
    species: null,
    sprites: null,
    types: null
  });
  const [hasDataLoaded, setHasDataLoaded] = useState(false);
  const params: any = useParams();
  const pokeId = params.id;

  const stats = data?.stats;
  const name = data?.species?.name;
  const sprites = data?.sprites;

  const typeOne: string = data?.types?.[0].type.name || "normal";
  let typeTwo: string;
  if (data?.types?.length === 2) {
    typeTwo = data?.types[1].type.name;
  } else {
    typeTwo = typeOne;
  }

  const typeOneObject = pokemonTypes.find(color => color.name === typeOne);
  const typeTwoObject = pokemonTypes.find(color => color.name === typeTwo);

  const colorOne: string = typeOneObject?.color;
  const colorTwo: string = typeTwoObject?.color;

  const generateStats = () => {
    if (!hasDataLoaded) {
      return;
    }
    return stats.map(stat => ({
      name: stat.stat.name,
      stat: stat.base_stat
    }));
  };

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;
    const effect = async () => {
      const result = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokeId}`,
        { signal }
      );
      const response = await result.json();
      console.log(response);
      setData(response);
      setHasDataLoaded(true);
    };
    effect();
    return () => abortController.abort();
  }, [pokeId]);

  return (
    <StyledContainer>
      <StyledProfileCard colorOne={colorOne} colorTwo={colorTwo}>
        <StyledProfileDisplayImgWrapper
          src={sprites?.other?.dream_world?.front_default}
          alt={name}
        />
      </StyledProfileCard>
      <StyledInfoCard>Hello</StyledInfoCard>
    </StyledContainer>
  );
};

export default PokemonProfile;
