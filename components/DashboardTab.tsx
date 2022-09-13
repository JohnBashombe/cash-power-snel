import React, { useState } from 'react';
import { AiOutlineBulb } from 'react-icons/ai';
import {
  MdOutlineWifi,
  MdOutlineWaterDrop,
  MdOutlinePhoneAndroid,
} from 'react-icons/md';

const DashboardTab = (): JSX.Element => {
  type ITabs = { title: string; icon: JSX.Element };
  const Tabs: ITabs[] = [
    {
      title: 'Electricity',
      icon: <AiOutlineBulb className='w-6 h-6' />,
    },
    {
      title: 'Water',
      icon: <MdOutlineWaterDrop className='w-6 h-6' />,
    },
    {
      title: 'Internet',
      icon: <MdOutlineWifi className='w-6 h-6' />,
    },
    {
      title: 'Airtime',
      icon: <MdOutlinePhoneAndroid className='w-6 h-6' />,
    },
  ];
  const [selected, setSelected] = useState<string>(Tabs[0].title);
  return (
    <div className='flex overflow-x-auto space-x-4'>
      {Tabs.map((value, index) => (
        <div
          key={index}
          onClick={() => setSelected(value.title)}
          className={
            ` pl-3 pr-8 cursor-pointer rounded-xl py-2 text-sm flex justify-start font-medium items-center space-x-4 ` +
            (selected === value.title
              ? 'bg-secondary hover:bg-secondary/90 text-white'
              : 'bg-white text-primary')
          }
        >
          <div
            className={
              `p-3 rounded-xl ` +
              (selected === value.title ? 'bg-white text-primary' : 'bg-back')
            }
          >
            {value.icon}
          </div>
          <p>{value.title}</p>
        </div>
      ))}
    </div>
  );
};

export default DashboardTab;
