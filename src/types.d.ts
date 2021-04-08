interface Sprites {
  back_default?: string;
  back_female?: string;
  back_shiny?: string;
  back_shiny_female?: string;
  front_default?: string;
  front_female?: string;
  front_shiny?: string;
  front_shiny_female?: string;
  other: {
    dream_world: {
      front_default?: string;
      front_female?: string;
    };
    "official-artwork": {
      front_default?: string;
    };
  };
  versions: {
    "generation-i": {
      "red-blue": {
        back_default?: string;
        back_gray?: string;
        front_default?: string;
        front_gray?: string;
      };
      yellow: {
        back_default?: string;
        back_gray?: string;
        front_default?: string;
        front_gray?: string;
      };
    };
    "generation-ii": {
      crystal: {
        back_default?: string;
        back_shiny?: string;
        front_default?: string;
        front_shiny?: string;
      };
      gold: {
        back_default?: string;
        back_shiny?: string;
        front_default?: string;
        front_shiny?: string;
      };
      silver: {
        back_default?: string;
        back_shiny?: string;
        front_default?: string;
        front_shiny?: string;
      };
    };
    "generation-iii": {
      emerald: {
        front_default?: string;
        front_shiny?: string;
      };
      "firered-leafgreen": {
        back_default?: string;
        back_shiny?: string;
        front_default?: string;
        front_shiny?: string;
      };
      "ruby-sapphire": {
        back_default?: string;
        back_shiny?: string;
        front_default?: string;
        front_shiny?: string;
      };
    };
    "generation-iv": {
      "diamond-pearl": {
        back_default?: string;
        back_female?: string;
        back_shiny?: string;
        back_shiny_female?: string;
        front_default?: string;
        front_female?: string;
        front_shiny?: string;
        front_shiny_female?: string;
      };
      "heartgold-soulsilver": {
        back_default?: string;
        back_female?: string;
        back_shiny?: string;
        back_shiny_female?: string;
        front_default?: string;
        front_female?: string;
        front_shiny?: string;
        front_shiny_female?: string;
      };
      platinum: {
        back_default?: string;
        back_female?: string;
        back_shiny?: string;
        back_shiny_female?: string;
        front_default?: string;
        front_female?: string;
        front_shiny?: string;
        front_shiny_female?: string;
      };
    };
    "generation-v": {
      animated: {
        back_default?: string;
        back_female?: string;
        back_shiny?: string;
        back_shiny_female?: string;
        front_default?: string;
        front_female?: string;
        front_shiny?: string;
        front_shiny_female?: string;
      };
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
      "omegaruby-alphasapphire": {
        front_default?: string;
        front_female?: string;
        front_shiny?: string;
        front_shiny_female?: string;
      };
      "x-y": {
        front_default?: string;
        front_female?: string;
        front_shiny?: string;
        front_shiny_female?: string;
      };
    };
    "generation-vii": {
      icons: {
        front_default?: string;
        front_female?: string;
      };
      "ultra-sun-ultra-moon": {
        front_default?: string;
        front_female?: string;
        front_shiny?: string;
        front_shiny_female?: string;
      };
    };
    "generation-viii": {
      icons: {
        front_default?: string;
        front_female?: string;
      };
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
  species?: Species;
  order: number;
  types?: Type[];
  abilities?: Ability[];
  stats?: Stat[];
  sprites?: Sprites;
}
