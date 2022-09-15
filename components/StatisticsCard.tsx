import React from 'react';
import { AiOutlineArrowUp } from 'react-icons/ai';

type ICard = { title: string; subTitle: string };
const StatisticsCard = ({ title, subTitle }: ICard): JSX.Element => {
  return (
    <div className='flex flex-col bg-white space-y-4 shadow rounded-xl px-4 py-6'>
      <p className='text-black/80 text-sm'>{subTitle}</p>
      <p className='font-bold text-4xl text-primary'>{title}</p>
      <div className='flex justify-start items-center space-x-2'>
        <div className='bg-green-800/50 p-1 rounded-full'>
          <AiOutlineArrowUp className='text-green-700 text-sm' />
        </div>
        <p className='text-base font-medium text-green-800'>+12.08%</p>
        <p className='text-sm text-texture'>than last week</p>
      </div>
    </div>
    // <div className='relative mx-auto w-[80%] md:w-full h-full flex justify-center items-center px-5 py-20'>
    //   <div className='absolute w-full h-full p-9'>
    //     <div className='w-24 h-24 bg-back rounded-bl-full absolute shadow-xl'></div>
    //     <div className='w-24 h-24 bg-back rounded-tl-full absolute -top-12'></div>
    //     <div className='w-24 h-24 absolute bg-tertiary shadow-xl rounded-bl-3xl rounded-br-full left-[120px] top-9'></div>
    //     <div className='w-32 h-32 absolute bg-secondary rounded-tr-3xl rounded-3xl left-[105px] -top-14 rotate-[20deg]'></div>
    //     <div className='flex justify-center items-center absolute bg-white w-32 h-32 left-16 -top-5 rounded-full'>
    //       <div className='w-28 h-28 bg-white shadow-2xl rounded-full flex flex-col justify-center items-center'>
    //         <p className='text-tertiary text-xs font-medium'>{subTitle}</p>
    //         <p className='font-bold text-base text-primary'>{title}</p>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default StatisticsCard;
