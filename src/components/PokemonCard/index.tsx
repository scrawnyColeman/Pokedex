import React from "react";

type PokemonCardProps = {
  pokemon: PokemonVerbose;
};

const PokemonCard = ({ pokemon }: PokemonCardProps): JSX.Element => {
  const { species, order, types, abilities, stats, sprites } = pokemon;
  return (
    <div>
      <div>{species?.name}</div>
      <div>{order}</div>
      <div>{types?.map((type: any) => type.type.name + " ")}</div>
      <div>
        {sprites?.front_default && (
          <img src={sprites?.front_default} alt={species?.name} />
        )}
      </div>
    </div>
  );
};

export default PokemonCard;
