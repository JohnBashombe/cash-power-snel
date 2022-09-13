import React from 'react';
import Head from 'next/head';
import { NextPage } from 'next';
import App from './_app';

/**
 * @author Ntavigwa Bashombe
 * @since 0.001
 *
 * @summary This is the home page
 * @returns {JSX.Element}: JSX Code for Home
 * @license MIT
 * @version 1.0.0
 */
const Home: NextPage = (): JSX.Element => {
  return (
    <div className='flex'>
      <Head>
        <title>UMEME</title>
        <meta name='description' content='Umeme' />
      </Head>
      <App />
    </div>
  );
};

export default Home;
