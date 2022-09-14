import React, { useState } from 'react';
import { Tabs } from '../lib/data/tabs';

const DashboardTab = (): JSX.Element => {
  const [selected, setSelected] = useState<string>(Tabs[0].title);
  return (
    <div className='flex flex-row overflow-x-auto justify-start items-center w-full h-full no-scrollbars space-x-4'>
      {Tabs.map((value, index) => (
        <div
          key={index}
          onClick={() => setSelected(value.title)}
          className={
            ` pl-3 pr-8 cursor-pointer w-fit min-w-fit h-full rounded-xl py-2 text-sm flex justify-start font-medium items-center space-x-2 md:space-x-4 ` +
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
          <p className='min-w-fit'>{value.title}</p>
        </div>
      ))}
    </div>
  );
};

export default DashboardTab;
