import React from 'react';
import { useRouter } from 'next/router';

const NotFound = (): JSX.Element => {
  const router = useRouter();
  return (
    <div className='w-full h-full mb-10 flex flex-col justify-center items-center space-y-8'>
      <div className='w-10/12 md:w-1/4 h-full'>
        <img
          className='w-full h-full'
          src='https://ik.imagekit.io/ntavigwa/Introuvable_bkWiLKZvM.png?ik-sdk-version=javascript-1.4.3&updatedAt=1662593198079'
          alt='not found'
        />
      </div>
      <p
        onClick={() => void router.push('/')}
        className='text-sm font-bold hover:underline cursor-pointer text-black/80 hover:text-black'
      >
        Retournez à la page d'accueil
      </p>
    </div>
  );
};

export default NotFound;
