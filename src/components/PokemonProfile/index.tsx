import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  StyledContainer,
  StyledProfileCard,
  StyledProfileDisplayImgWrapper,
  StyledInfoCard,
  StyledProfileName,
  StyledProfileStatsWrapper,
  StyledBackBtn
} from "./style";
import { types as pokemonTypes } from "../../data/types";
import { PokeballContainer } from "../HomePage/style";
import HourGlass from "../Spinner";
import ProfileInformation from "../ProfileInformation";
import dex from "../../assets/images/pokedex.png";

const PokemonProfile = (): JSX.Element => {
  const [data, setData] = useState({
    stats: null,
    species: null,
    sprites: null,
    types: null,
    moves: null
  });
  const [hasDataLoaded, setHasDataLoaded] = useState(false);
  const params: any = useParams();
  const pokeId = params.id;

  const moves = data?.moves;
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

  const iconOne = typeOneObject?.logo;
  const iconTwo = typeTwoObject?.logo;

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
    <>
      <Link to="/" aria-label="back-button">
        <StyledBackBtn src={dex} alt="dex" />
      </Link>
      <StyledContainer>
        <StyledProfileCard>
          <StyledProfileDisplayImgWrapper
            src={sprites?.other?.["official-artwork"]?.front_default}
            alt={name}
          />
          {typeOne === typeTwo ? (
            <div>{iconOne}</div>
          ) : (
            <div>
              {iconOne} {iconTwo}
            </div>
          )}
          <StyledProfileName>
            {data.species.name.toUpperCase()}
          </StyledProfileName>
          <StyledProfileStatsWrapper>
            {generateStats().map(pokeStat => {
              const { name, stat } = pokeStat;
              return (
                <div key={`${name}:${stat}`}>
                  {name.toUpperCase()}: {stat}
                </div>
              );
            })}
          </StyledProfileStatsWrapper>
        </StyledProfileCard>
        <StyledInfoCard>
          <ProfileInformation moves={moves} />
        </StyledInfoCard>
      </StyledContainer>
    </>
  ) : (
    <PokeballContainer>{hasDataLoaded && <HourGlass />}</PokeballContainer>
  );
};

export default PokemonProfile;
