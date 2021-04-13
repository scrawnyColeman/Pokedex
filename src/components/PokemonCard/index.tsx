import React, { forwardRef } from "react";
import {
  StyledCard,
  StyledIDWrapper,
  StyledImg,
  StyledCardHead,
  StyledCardBody,
  StyledPokeball,
  StyledCardBodyHeader,
  StyledCardBodyHeaderName,
  StyledCardBodyHeaderType
} from "./style";
import pokeball from "../../assets/images/pokeball.svg";
import { types as pokemonTypes } from "../../data/types";
import { capitalizeFirstLetter } from "../../utils";

type PokemonCardProps = {
  pokemon: PokemonVerbose;
};

const PokemonCard = forwardRef(
  ({ pokemon }: PokemonCardProps, ref: any): JSX.Element => {
    const { species, types, sprites, id } = pokemon;
    const { name } = species;

    const typeOne: string = types?.[0].type.name || "normal";
    let typeTwo: string;
    if (types?.length === 2) {
      typeTwo = types[1].type.name;
    } else {
      typeTwo = typeOne;
    }

    const typeOneObject = pokemonTypes.find(color => color.name === typeOne);
    const typeTwoObject = pokemonTypes.find(color => color.name === typeTwo);

    const colorOne: string = typeOneObject?.color;
    const colorTwo: string = typeTwoObject?.color;

    const iconOne = typeOneObject?.logo;
    const iconTwo = typeTwoObject?.logo;
    return (
      <StyledCard ref={ref} to={`/pokemon/${id}`} aria-label="pokemon-card">
        {sprites?.other?.["official-artwork"] && (
          <StyledImg
            src={sprites.other["official-artwork"].front_default}
            alt={species?.name}
          />
        )}
        <StyledIDWrapper>{`#${id}`}</StyledIDWrapper>
        <StyledCardHead colorOne={colorOne} colorTwo={colorTwo}>
          <StyledPokeball src={pokeball} alt="pokeball" />
        </StyledCardHead>
        <StyledCardBody>
          <StyledCardBodyHeader>
            <StyledCardBodyHeaderName>
              {capitalizeFirstLetter(name)}
            </StyledCardBodyHeaderName>
            <StyledCardBodyHeaderType>
              {typeOne === typeTwo ? (
                <div>{iconOne}</div>
              ) : (
                <div>
                  {iconOne} {iconTwo}
                </div>
              )}
            </StyledCardBodyHeaderType>
          </StyledCardBodyHeader>
        </StyledCardBody>
      </StyledCard>
    );
  }
);

export default PokemonCard;
