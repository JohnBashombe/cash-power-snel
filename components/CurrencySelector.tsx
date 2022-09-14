import React, { Dispatch, SetStateAction } from 'react';
import { MdArrowDropDown } from 'react-icons/md';
import { Currency } from '../lib/data/currency';

type IType = {
  currency: number;
  setCurrency: Dispatch<SetStateAction<number>>;
};

const CurrencySelector = ({ currency, setCurrency }: IType): JSX.Element => {
  return (
    <div>
      <div className='absolute top-10 right-20 z-10 w-5 h-5'>
        {Currency[currency].icon}
      </div>
      <select
        onChange={(e) => setCurrency(e.target.selectedIndex)}
        className='flex flex-row appearance-none pr-9 pl-12 top-[22px] text-sm space-x-2 absolute py-4 bg-white text-primary right-[2px] rounded-xl focus:outline-none '
      >
        {Currency.map((value, index) => (
          <option key={index} value={value.value}>
            {value.name}
          </option>
        ))}
      </select>
      <MdArrowDropDown className='absolute text-2xl top-9 right-3' />
    </div>
  );
};

export default CurrencySelector;
