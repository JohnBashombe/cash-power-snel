import React, { useState } from 'react';
import { Menu } from '../lib/data/sidebar';
import { BottomMenu } from '../lib/data/bottomMenu';
import Bulb from './vectors/Bulb';

const SideBar = (): JSX.Element => {
  const [selected, setSelected] = useState<string>(Menu[0].title);
  return (
    <div className='flex flex-col justify-between h-full min-h-screen p-10 rounded-r-xl bg-white'>
      <div className='flex flex-col'>
        <div className='flex justify-center items-center space-x-2 h-auto w-full'>
          <Bulb className='w-6 h-6' />
          <p className='text-primary font-bold text-2xl'>CASH POWER</p>
        </div>
        <div className='flex flex-col space-y-1 justify-between items-start font-medium w-full h-full mt-8 text-2xl'>
          {Menu.map((value, index) => (
            <div
              key={index}
              onClick={() => setSelected(value.title)}
              className={
                `w-full flex justify-start items-center space-x-2 py-5 px-8 rounded-xl cursor-pointer hover:bg-back ` +
                (selected === value.title
                  ? 'bg-back text-secondary font-bold'
                  : 'text-texture')
              }
            >
              {value.icon}
              <p className='text-base'>{value.title}</p>
            </div>
          ))}
        </div>
      </div>
      <div className='flex flex-col font-medium'>
        {BottomMenu.map((value, index) => (
          <div
            key={index}
            onClick={() => setSelected(value.title)}
            className={
              `w-full flex justify-start items-center space-x-2 py-5 px-8 rounded-xl cursor-pointer hover:bg-back ` +
              (selected === value.title
                ? 'bg-back text-secondary font-bold'
                : 'text-texture')
            }
          >
            {value.icon}
            <p className='text-base'>{value.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
