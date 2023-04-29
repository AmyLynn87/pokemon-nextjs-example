//Libs
import Image from 'next/image'

//Local
import { Pokemon } from "@/models/pokemon"

interface Props {
  pokemon: Pokemon
}

export default function PokemonTab({ pokemon }: Props) {

  const type = pokemon.type.toString()
  return (
    <li className="border rounded-md border-white p-4 text-white list-none m-auto max-w-md">
      <div>
        <div className='flex justify-center'>
          <Image
            src={pokemon.imageURL}
            alt={pokemon.name}
            width={250}
            height={250}
          />
        </div>
        <div>Code: #{pokemon.code}</div>
        <div>Name: {pokemon.name}</div>
        <div>Type: {type}</div>
      </div>
    </li>
  )
}