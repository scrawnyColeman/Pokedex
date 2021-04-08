import React from "react";
import {
  StyledCard,
  StyledImg,
  StyledCardHead,
  StyledCardBody,
  StyledPokeball,
  StyledCardBodyHeader,
  StyledCardBodyHeaderName,
  StyledCardBodyHeaderType
} from "./style";
import pokeball from "../../assets/images/pokeball.svg";
import { typeColors } from "../../data/typeColors";

type PokemonCardProps = {
  pokemon: PokemonVerbose;
};

const PokemonCard = ({ pokemon }: PokemonCardProps): JSX.Element => {
  const { species, types, sprites } = pokemon;
  const { name } = species;

  const typeOne: string = types?.[0].type.name || "normal";
  const colorOne: string =
    typeColors.find(color => color.name === typeOne)?.color || "#A8A878";
  let typeTwo: string;

  if (types?.length === 2) {
    typeTwo = types[1].type.name;
  } else {
    typeTwo = typeOne;
  }
  const colorTwo: string =
    typeColors.find(color => color.name === typeTwo)?.color || "#A8A878";

  return (
    <StyledCard>
      {sprites?.front_default && (
        <StyledImg
          src={sprites.other?.["official-artwork"].front_default}
          alt={species?.name}
        />
      )}
      <StyledCardHead colorOne={colorOne} colorTwo={colorTwo}>
        <StyledPokeball src={pokeball} alt="pokeball" />
      </StyledCardHead>
      <StyledCardBody>
        <StyledCardBodyHeader>
          <StyledCardBodyHeaderName>
            {name.charAt(0).toUpperCase() + name.slice(1)}
          </StyledCardBodyHeaderName>
          <StyledCardBodyHeaderType>
            {typeOne === typeTwo ? typeOne : `${typeOne} / ${typeTwo}`}
          </StyledCardBodyHeaderType>
        </StyledCardBodyHeader>
      </StyledCardBody>
    </StyledCard>
  );
};

export default PokemonCard;
