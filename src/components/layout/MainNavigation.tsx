//Libs
import Link from 'next/link';

//Local

export default function MainNavigation() {

  return (
    <header className='bg-red-600 text-white py-4 px-6 flex items-center mb-8'>
      <div className='mr-auto text-3xl font-bold'>{`Elisa's Pokedex`}</div>
      <nav>
        <ul className='gap-4 flex'>
          <li className='border border-white rounded-md py-2 px-4'>
            <Link href='/'>Pokedex</Link>
          </li>
          <li className='border border-white rounded-md py-2 px-4'>
            <Link href='/new-pokemon'>Add New Pokemon</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
