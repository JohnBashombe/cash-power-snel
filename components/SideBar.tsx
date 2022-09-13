import React, { useState } from 'react';
import { AiOutlineSetting } from 'react-icons/ai';
import {
  MdOutlineLogout,
  MdOutlineAnalytics,
  MdOutlinePieChart,
  MdOutlineCreditCard,
  MdOutlineWbSunny,
  MdOutlineFolder,
} from 'react-icons/md';

const SideBar = (): JSX.Element => {
  type IMenu = {
    title: string;
    icon: JSX.Element;
  };

  const Menu: IMenu[] = [
    {
      title: 'Dashboard',
      icon: <MdOutlineAnalytics />,
    },
    {
      icon: <MdOutlinePieChart className='text-2xl' />,
      title: 'Summary',
    },
    {
      icon: <MdOutlineCreditCard className='text-2xl' />,
      title: 'Payments',
    },
    {
      icon: <MdOutlineWbSunny className='text-2xl' />,
      title: 'Energy',
    },
    {
      icon: <MdOutlineFolder className='text-2xl' />,
      title: 'Properties',
    },
  ];
  const [selected, setSelected] = useState<string>(Menu[0].title);

  return (
    <div className='flex flex-col justify-between h-full min-h-screen w-[17%] min-w-[17%] p-10 rounded-r-xl bg-white'>
      <div className='flex flex-col'>
        <div className='flex justify-center items-center space-x-2 h-auto w-full'>
          <div className='w-7 h-7 bg-primary'>
            <div className='w-7 h-7 bg-white rounded-full'></div>
          </div>
          <p className='text-primary font-bold text-2xl'>CASH POWER</p>
        </div>
        <div className='flex flex-col space-y-2 justify-between items-start font-medium w-full h-full mt-14 text-2xl'>
          {Menu.map((value, index) => (
            <div
              key={index}
              onClick={() => setSelected(value.title)}
              className={
                `w-full flex justify-start items-center space-x-4 py-5 px-8 rounded-xl cursor-pointer hover:bg-back ` +
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
        <div
          onClick={() => setSelected('settings')}
          className={
            `w-full flex justify-start items-center space-x-4 py-5 px-8 rounded-xl cursor-pointer hover:bg-back ` +
            (selected === 'settings'
              ? 'bg-back text-secondary'
              : 'text-texture')
          }
        >
          <AiOutlineSetting className='text-2xl' />
          <p>Setting</p>
        </div>
        <div className='w-full flex justify-start items-center space-x-4 text-texture py-5 px-10 rounded-xl cursor-pointer hover:text-red-300/70'>
          <MdOutlineLogout className='text-2xl' />
          <p>Log out</p>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
