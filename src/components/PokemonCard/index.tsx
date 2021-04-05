import React from "react";
import {
  StyledCard,
  StyledImg,
  StyledCardHead,
  StyledCardBody,
  StyledPokeball
} from "./style";
import pokeball from "../../assets/images/pokeball.svg";

type PokemonCardProps = {
  pokemon: PokemonVerbose;
};

const PokemonCard = ({ pokemon }: PokemonCardProps): JSX.Element => {
  const { species, order, types, sprites } = pokemon;
  return (
    <StyledCard>
      {sprites?.front_default && (
        <StyledImg src={sprites?.front_default} alt={species?.name} />
      )}
      <StyledCardHead>
        <StyledPokeball src={pokeball} alt="pokeball" />
      </StyledCardHead>
      <StyledCardBody>
        {species?.name}
        {order}
        <div>{types?.map((type: any) => type.type.name + " ")}</div>
      </StyledCardBody>
    </StyledCard>
  );
};

export default PokemonCard;
