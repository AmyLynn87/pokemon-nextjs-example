//Libs
import { MongoClient } from "mongodb"
import { ExistingPokemon } from "./models/pokemon";

//Local

export async function connectToDB() {
  // const client = await MongoClient.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@exmpleproject.uhpceew.mongodb.net/?retryWrites=true&w=majority`)

  const client = await MongoClient.connect(`${process.env.MONGO_URI}`)
  return client;
}


export async function getAllPokemon(): Promise<ExistingPokemon[]> {

  const client = await connectToDB();
  const db = client.db();

  const pokemonCollection = db.collection('pokedex');
  const sortPokedexWithId = await pokemonCollection.find().sort({ code: 1 }).toArray();
  client.close();

  const pokedex = sortPokedexWithId.map((pokemon) => ({
    imageURL: pokemon.imageURL,
    code: pokemon.code,
    name: pokemon.name,
    type: pokemon.type,
    id: pokemon._id.toString(),
  }));

  return pokedex;
}