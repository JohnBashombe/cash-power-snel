import React from 'react';
import { MdArrowDropDown } from 'react-icons/md';
import { AiOutlineSearch, AiOutlineBell, AiOutlineUser } from 'react-icons/ai';

const TopBar = (): JSX.Element => {
  return (
    <div className='flex flex-col-reverse md:flex-row justify-between items-start w-full pt-5 pb-4 border-b mb-4 border-gray-200'>
      <div className='my-2 md:my-0 w-full md:w-2/3 xl:w-1/2 flex justify-start items-center h-full relative text-texture'>
        <AiOutlineSearch className='absolute left-5 text-2xl' />
        <input
          placeholder='Search by Name, Email or Phone'
          type='text'
          className='w-full text-xs md:text-sm py-5 pl-14 md:pl-16 pr-40 placeholder:text-texture focus:outline-none rounded-xl'
        />
        <div className='flex flex-row justify-center items-center text-xs md:text-sm space-x-2 px-4 absolute py-4 bg-back right-[2px] rounded-xl cursor-pointer'>
          <p>Everything</p>
          <MdArrowDropDown className='text-xl' />
        </div>
      </div>
      <div className='w-full md:w-1/3 lg:w-1/2 flex space-x-2 text-xs justify-end items-center text-texture py-3'>
        <div className='md:hidden flex justify-start items-center space-x-2 h-auto w-full'>
          <p className='text-primary font-bold text-2xl'>CASH POWER</p>
        </div>
        <div className='flex justify-end items-center space-x-2'>
          <AiOutlineBell className='text-3xl cursor-pointer' />
          <div className='bg-tertiary p-2 rounded-xl text-white text-xl cursor-pointer'>
            <AiOutlineUser />
          </div>
          <p className='font-normal cursor-pointer hidden md:block'>Bashombe</p>
          <MdArrowDropDown className='text-xl cursor-pointer hidden md:block' />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
