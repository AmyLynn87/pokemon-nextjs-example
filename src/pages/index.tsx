
//Libs


//Local
import Pokedex from "@/components/Pokedex"
import { ExistingPokemon } from "@/models/pokemon"
import { getAllPokemon } from "@/database"

interface Props {
  pokedex: ExistingPokemon[]
}

export default function HomePage(props: Props) {


  return (
    <div className="space-y-4">
      <Pokedex pokedex={props.pokedex} />
    </div>
  )
}


export async function getStaticProps() {

  const pokedex = await getAllPokemon();

  return {
    props: {
      pokedex
    },
  }
}