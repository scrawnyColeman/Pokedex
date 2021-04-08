interface Details {
  back_default?: string;
  back_female?: string;
  back_shiny?: string;
  back_shiny_female?: string;
  back_gray?: string;
  front_gray?: string;
  front_default?: string;
  front_female?: string;
  front_shiny?: string;
  front_shiny_female?: string;
}

interface Sprites extends Details {
  other: {
    dream_world: Pick<Details, 'front_default' | 'front_female'>;
    "official-artwork": Pick<Details, 'front_default'>;
  };
  versions: {
    "generation-i": {
      "red-blue": Partial<Details>;
      yellow: Partial<Details>;
    };
    "generation-ii": {
      crystal: Partial<Details>;
      gold: Partial<Details>;
      silver: Partial<Details>;
    };
    "generation-iii": {
      emerald: Pick<Details, 'front_default' | 'front_shiny'>;
      "firered-leafgreen": Partial<Details>;
      "ruby-sapphire": Partial<Details>;
    };
    "generation-iv": {
      "diamond-pearl": artial<Details>;
      "heartgold-soulsilver": artial<Details>;
      platinum: artial<Details>;
    };
    "generation-v": {
      animated: artial<Details>;
      back_default?: string;
      back_female?: string;
      back_shiny?: string;
      back_shiny_female?: string;
      front_default?: string;
      front_female?: string;
      front_shiny?: string;
      front_shiny_female?: string;
    };
    "generation-vi": {
      "omegaruby-alphasapphire": Partial<Details>;
      "x-y": Partial<Details>;
    };
    "generation-vii": {
      icons: Partial<Details>;
      "ultra-sun-ultra-moon": Partial<Details>;
    };
    "generation-viii": {
      icons: Pick<Details, 'front_default' | 'front_female'>;
    };
  };
}

interface Stat {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
}

interface Ability {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
  slot: number;
}

interface Type {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

interface Species {
  name: string;
  url: string;
}

interface PokemonVerbose {
  species: Species;
  id: number;
  types: Type[];
  abilities: Ability[];
  stats: Stat[];
  sprites: Sprites;
}
