//Libs
import { GetStaticPaths, GetStaticProps } from "next";

//Local
import PokemonTab from "@/components/PokemonTab";
import { ExistingPokemon } from "@/models/pokemon";
import { connectToDB } from "@/database";

interface Props {
  pokemon: ExistingPokemon;
}

export default function PokemonDetails(props: Props) {

  return <PokemonTab pokemon={props.pokemon} />
}

export const getStaticPaths: GetStaticPaths = async () => {
  const client = await connectToDB();

  const db = client.db();

  const pokemonCollection = db.collection('pokedex');

  const pokedex = await pokemonCollection.find().toArray();

  client.close();

  return {
    fallback: false,
    paths: pokedex.map((pokemon) => ({ params: { pokemonName: pokemon.name } }))
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  if (context.params != null) {
    const pokemonName = context.params.pokemonName;

    const client = await connectToDB();

    const db = client.db();

    const pokemonCollection = db.collection('pokedex');

    const selectedPokemon = await pokemonCollection.findOne({ name: pokemonName });

    client.close();

    //fetch data from API
    return {
      props: {
        pokemon: {
          id: selectedPokemon?._id.toString(),
          name: selectedPokemon?.name,
          code: selectedPokemon?.code,
          type: selectedPokemon?.type,
          imageURL: selectedPokemon?.imageURL,
        },
      }
    }
  } else {
    return {
      props: {
        pokemon: null
      }
    }
  }

}