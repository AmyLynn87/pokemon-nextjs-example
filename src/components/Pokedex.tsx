//Libs
import { useRouter } from "next/router";
import Image from 'next/image'

//Local
import { Pokemon } from "@/models/pokemon";

interface Props {
  pokedex: Pokemon[]
}

export default function Pokedex(props: Props) {

  const router = useRouter();

  function onShowMore(name: Pokemon["name"]) {
    return router.push('/' + name)
  }

  return (
    <ul className="ml-4 max-w-md space-y-4">
      {props.pokedex.map((pokemon) => {
        return (
          <div key={pokemon.code} className="p-4 border border-white rounded-md flex justify-between items-center">
            <Image
              src={pokemon.imageURL}
              alt={pokemon.name}
              width={70}
              height={70}
            />
            {pokemon.name}
            <button className="bg-white text-black rounded-md py-2 px-4" onClick={() => onShowMore(pokemon.name)}>Show More</button>
          </div>
        )
      }
      )}
    </ul>
  )
}
