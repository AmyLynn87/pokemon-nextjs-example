//Libs

//Local
import NewPokemonForm from "@/components/NewPokemonForm";
import { Pokemon } from "@/models/pokemon";

export default function NewPokemonPage() {

  async function handleAddNewPokemon(newPokemon: Pokemon) {

    const response = await fetch('/api/new-pokemon', {
      method: 'POST',
      body: JSON.stringify(newPokemon),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const data = await response.json();

    console.log(data)
  }

  return (
    <NewPokemonForm onAddPokemon={handleAddNewPokemon} />
  )
}