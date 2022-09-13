import React from 'react';
import Scaffold from '../components/Scaffold';
import SideBar from '../components/SideBar';
import TopBar from '../components/TopBar';
import '../styles/globals.css';

/**
 * @author Ntavigwa Bashombe
 * @since 0.001
 *
 * @summary This is the main app that imports our styles
 * @returns {JSX.Element}: JSX Code for App
 * @license MIT
 * @version 1.0.0
 */
const App = (): JSX.Element => {
  return (
    <div className='w-full h-full min-h-screen flex justify-start items-start bg-typo selection:bg-primary selection:text-white'>
      <SideBar />
      <div className='flex flex-col px-10 w-full'>
        <TopBar />
        <Scaffold />
      </div>
    </div>
  );
};

export default App;
