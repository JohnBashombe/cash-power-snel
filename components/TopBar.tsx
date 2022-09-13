import React from 'react';
import { MdArrowDropDown } from 'react-icons/md';
import { AiOutlineSearch, AiOutlineBell, AiOutlineUser } from 'react-icons/ai';

const TopBar = (): JSX.Element => {
  return (
    <div className='flex flex-row justify-between items-start w-full pt-5 pb-4 border-b mb-4 border-gray-200'>
      <div className='w-1/2 flex justify-start items-center h-full relative text-texture'>
        <AiOutlineSearch className='absolute left-5 text-2xl' />
        <input
          placeholder='Search'
          type='text'
          className='w-full py-4 pl-16 pr-40 placeholder:text-texture focus:outline-none rounded-xl'
        />
        <div className='flex flex-row justify-center items-center text-sm space-x-2 px-4 absolute py-4 bg-back right-[2px] rounded-xl cursor-pointer'>
          <p>Natural Gas</p>
          <MdArrowDropDown className='text-xl' />
        </div>
      </div>
      <div className='w-1/2 flex space-x-2 text-xs justify-end items-center text-texture py-3'>
        <AiOutlineBell className='text-2xl cursor-pointer' />
        <div className='bg-tertiary p-2 rounded-xl text-white text-xl cursor-pointer'>
          <AiOutlineUser />
        </div>
        <p className='font-normal cursor-pointer'>Bashombe</p>
        <MdArrowDropDown className='text-xl cursor-pointer' />
      </div>
    </div>
  );
};

export default TopBar;
