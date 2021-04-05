import React from "react";

type PokemonCardProps = {
  pokemon: Object;
};

const PokemonCard = ({ pokemon }: PokemonCardProps): JSX.Element => {
  return <div>{JSON.stringify(pokemon, null, 2)}</div>;
};

export default PokemonCard;
