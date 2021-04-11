import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  StyledContainer,
  StyledProfileCard,
  StyledProfileDisplayImgWrapper,
  StyledInfoCard,
  StyledProfileName,
  StyledProfileStatsWrapper
} from "./style";
import { types as pokemonTypes } from "../../data/types";
import { PokeballContainer } from "../HomePage/style";
import HourGlass from "../Spinner";

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
      name: stat.stat.name.replace("special-", "SP."),
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
      setData(response);
      setHasDataLoaded(true);
    };
    effect();
    return () => abortController.abort();
  }, [pokeId]);

  return hasDataLoaded ? (
    <StyledContainer>
      <StyledProfileCard colorOne={colorOne} colorTwo={colorTwo}>
        <StyledProfileDisplayImgWrapper
          src={sprites?.other?.["official-artwork"]?.front_default}
          alt={name}
        />
        <StyledProfileName>{data.species.name.toUpperCase()}</StyledProfileName>
        <StyledProfileStatsWrapper>
          {generateStats().map(pokeStat => {
            const { name, stat } = pokeStat;
            return (
              <div>
                {name.toUpperCase()}: {stat}
              </div>
            );
          })}
        </StyledProfileStatsWrapper>
      </StyledProfileCard>
      <StyledInfoCard>Hello</StyledInfoCard>
    </StyledContainer>
  ) : (
    <PokeballContainer>{hasDataLoaded && <HourGlass />}</PokeballContainer>
  );
};

export default PokemonProfile;
