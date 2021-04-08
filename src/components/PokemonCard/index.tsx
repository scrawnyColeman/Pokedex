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
import { typeColors } from "../../data/typeColors";
import { useHistory } from "react-router-dom";

type PokemonCardProps = {
  pokemon: PokemonVerbose;
};

const PokemonCard = forwardRef(
  ({ pokemon }: PokemonCardProps, ref): JSX.Element => {
    const history = useHistory();
    const { species, id, types, sprites } = pokemon;
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
              {`${name.charAt(0).toUpperCase() + name.slice(1)}: ${id}`}
            </StyledCardBodyHeaderName>
            <StyledCardBodyHeaderType>
              {typeOne === typeTwo ? typeOne : `${typeOne} / ${typeTwo}`}
            </StyledCardBodyHeaderType>
          </StyledCardBodyHeader>
        </StyledCardBody>
      </StyledCard>
    );
  }
);

export default PokemonCard;
