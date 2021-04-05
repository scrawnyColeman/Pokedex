interface sprites {
  back_default: string | null;
  back_female: string | null;
  back_shiny: string | null;
  back_shiny_female: string | null;
  front_default: string | null;
  front_female: string | null;
  front_shiny: string | null;
  front_shiny_female: string | null;
  other: {
    dream_world: {
      front_default: string | null;
      front_female: string | null;
    };
    "official-artwork": {
      front_default: string | null;
    };
  };
  versions: {
    "generation-i": {
      "red-blue": {
        back_default: string | null;
        back_gray: string | null;
        front_default: string | null;
        front_gray: string | null;
      };
      yellow: {
        back_default: string | null;
        back_gray: string | null;
        front_default: string | null;
        front_gray: string | null;
      };
    };
    "generation-ii": {
      crystal: {
        back_default: string | null;
        back_shiny: string | null;
        front_default: string | null;
        front_shiny: string | null;
      };
      gold: {
        back_default: string | null;
        back_shiny: string | null;
        front_default: string | null;
        front_shiny: string | null;
      };
      silver: {
        back_default: string | null;
        back_shiny: string | null;
        front_default: string | null;
        front_shiny: string | null;
      };
    };
    "generation-iii": {
      emerald: {
        front_default: string | null;
        front_shiny: string | null;
      };
      "firered-leafgreen": {
        back_default: string | null;
        back_shiny: string | null;
        front_default: string | null;
        front_shiny: string | null;
      };
      "ruby-sapphire": {
        back_default: string | null;
        back_shiny: string | null;
        front_default: string | null;
        front_shiny: string | null;
      };
    };
    "generation-iv": {
      "diamond-pearl": {
        back_default: string | null;
        back_female: null;
        back_shiny: string | null;
        back_shiny_female: null;
        front_default: string | null;
        front_female: null;
        front_shiny: string | null;
        front_shiny_female: null;
      };
      "heartgold-soulsilver": {
        back_default: string | null;
        back_female: null;
        back_shiny: string | null;
        back_shiny_female: null;
        front_default: string | null;
        front_female: null;
        front_shiny: string | null;
        front_shiny_female: null;
      };
      platinum: {
        back_default: string | null;
        back_female: null;
        back_shiny: string | null;
        back_shiny_female: null;
        front_default: string | null;
        front_female: null;
        front_shiny: string | null;
        front_shiny_female: null;
      };
    };
    "generation-v": {
      animated: {
        back_default: string | null;
        back_female: null;
        back_shiny: string | null;
        back_shiny_female: null;
        front_default: string | null;
        front_female: null;
        front_shiny: string | null;
        front_shiny_female: null;
      };
      back_default: string | null;
      back_female: null;
      back_shiny: string | null;
      back_shiny_female: null;
      front_default: string | null;
      front_female: null;
      front_shiny: string | null;
      front_shiny_female: null;
    };
    "generation-vi": {
      "omegaruby-alphasapphire": {
        front_default: string | null;
        front_female: null;
        front_shiny: string | null;
        front_shiny_female: null;
      };
      "x-y": {
        front_default: string | null;
        front_female: null;
        front_shiny: string | null;
        front_shiny_female: null;
      };
    };
    "generation-vii": {
      icons: {
        front_default: string | null;
        front_female: null;
      };
      "ultra-sun-ultra-moon": {
        front_default: string | null;
        front_female: null;
        front_shiny: string | null;
        front_shiny_female: null;
      };
    };
    "generation-viii": {
      icons: {
        front_default: string | null;
        front_female: null;
      };
    };
  };
}

interface stat {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
}

interface ability {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
  slot: number;
}

interface type {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

interface species {
  name: string;
  url: string;
}

interface PokemonVerbose {
  species?: species;
  order: number;
  types?: type[];
  abilities?: ability[];
  stats?: stat[];
  sprites?: sprites;
}
