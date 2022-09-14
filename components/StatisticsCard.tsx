import React from 'react';

type ICard = { title: string; subTitle: string };
const StatisticsCard = ({ title, subTitle }: ICard): JSX.Element => {
  return (
    <div className='relative mx-auto w-[80%] md:w-full h-full flex justify-center items-center px-5 py-20'>
      <div className='absolute w-full h-full p-9'>
        <div className='w-24 h-24 bg-back rounded-bl-full absolute shadow-xl'></div>
        <div className='w-24 h-24 bg-back rounded-tl-full absolute -top-12'></div>
        <div className='w-24 h-24 absolute bg-tertiary shadow-xl rounded-bl-3xl rounded-br-full left-[120px] top-9'></div>
        <div className='w-32 h-32 absolute bg-secondary rounded-tr-3xl rounded-3xl left-[105px] -top-14 rotate-[20deg]'></div>
        <div className='flex justify-center items-center absolute bg-white w-32 h-32 left-16 -top-5 rounded-full'>
          <div className='w-28 h-28 bg-white shadow-2xl rounded-full flex flex-col justify-center items-center'>
            <p className='text-tertiary text-xs font-medium'>{subTitle}</p>
            <p className='font-bold text-base text-primary'>{title}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatisticsCard;
