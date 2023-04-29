export type Pokemon = {
  code: string;
  name: string;
  type: string[];
  imageURL: string;
}

export type ExistingPokemon = Pokemon & { id: string; }