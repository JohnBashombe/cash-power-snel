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
      <div className='hidden lg:block w-[30%] min-w-[30%] xl:w-[20%] xl:min-w-[20%] 2xl:w-[17%] 2xl:min-w-[17%]'>
        <SideBar />
      </div>
      <div className='flex flex-col px-5 lg:px-10 w-full lg:w-[70%] lg:min-w-[70%] xl:w-[80%] xl:min-w-[80%] 2xl:w-[83%] 2xl:min-w-[83%] h-full'>
        <TopBar />
        <Scaffold />
      </div>
    </div>
  );
};

export default App;
