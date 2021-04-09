import React, { forwardRef } from "react";
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
import { types as pokemonTypes } from "../../data/types";
import { useHistory } from "react-router-dom";

type PokemonCardProps = {
  pokemon: PokemonVerbose;
};

const PokemonCard = forwardRef(
  ({ pokemon }: PokemonCardProps, ref: any): JSX.Element => {
    const history = useHistory();
    const { species, id, types, sprites } = pokemon;
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
      <>
        <StyledCard ref={ref} onClick={() => history.push(`/pokemon/${name}`)}>
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
      </>
    );
  }
);

export default PokemonCard;
