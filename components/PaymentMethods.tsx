import React, { Dispatch, SetStateAction } from 'react';
import { Payments } from '../lib/data/networks';

type IPayment = {
  selected: string;
  setSelected: Dispatch<SetStateAction<string>>;
};

const PaymentMethods = ({ selected, setSelected }: IPayment): JSX.Element => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 w-full h-full'>
      {Payments.map((value, index) => (
        <div
          key={index}
          onClick={() => setSelected(value.title)}
          className={
            `flex justify-center shadow items-center px-4 py-5 md:py-4 lg:py-2 rounded-xl cursor-pointer ` +
            (selected === value.title
              ? 'bg-secondary hover:bg-secondary/80 '
              : 'bg-back hover:bg-back/80')
          }
        >
          <div className='w-20 flex justify-center items-center'>
            {value.icon}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PaymentMethods;
