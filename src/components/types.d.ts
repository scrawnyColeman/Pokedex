type sprites = {
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
    "generation-i": {};
    "generation-ii": {};
    "generation-iii": {};
    "generation-iv": {};
    "generation-v": {};
    "generation-vi": {};
    "generation-vii": {};
    "generation-viii": {};
  };
};

type stats = Array<{
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
}>;

type abilities = Array<{
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
  slot: number;
}>;

type types = {
  slot: number;
  type: {
    name: string;
    url: string;
  };
};

type species = {
  name: string;
  url: string;
};
