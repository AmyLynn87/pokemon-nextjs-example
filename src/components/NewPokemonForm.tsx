//Libs
import { useRef } from 'react';

//Local
import { Pokemon } from '@/models/pokemon';

interface Props {
  onAddPokemon: (pokemon: Pokemon) => void;
}

export default function NewPokemonForm({ onAddPokemon }: Props) {

  const formRef = useRef(null);

  function submitHandler(event: React.SyntheticEvent) {
    event.preventDefault();

    const target = event.target as typeof event.target & {
      code: { value: string };
      name: { value: string };
      type: { value: string };
      imageURL: { value: string };
    };
    const code = target.code.value;
    const name = target.name.value;
    const type = target.type.value.split(',');
    const imageURL = target.imageURL.value;

    const newPokemonData: Pokemon = {
      code,
      name,
      type,
      imageURL,
    };

    onAddPokemon(newPokemonData);
  }

  return (
    <form id='new-pokemon-form' ref={formRef} onSubmit={submitHandler} className='border border-white rounded-md p-4 space-y-4 m-4'>
      <div className='space-x-2'>
        <label htmlFor='code'>Code</label>
        <input type='text' required id='code' />
      </div>
      <div className='space-x-2'>
        <label htmlFor='name'>Name</label>
        <input type='text' required id='name' />
      </div>
      <div className='space-x-2'>
        <label htmlFor='imageURL'>Image URL</label>
        <input type='text' required id='imageURL' />
      </div>
      <div className='space-x-2'>
        <label htmlFor='type'>Type</label>
        <textarea
          id='type'
          required
          rows={3}
        ></textarea>
      </div>
      <div className='flex gap-4'>
        <button type="submit" className='text-black bg-white rounded-md py-2 px-3'>Add Pokemon</button>
        <button type='reset' className='text-black bg-white rounded-md py-2 px-3'>Reset Form</button>
      </div>
    </form>
  );
}
