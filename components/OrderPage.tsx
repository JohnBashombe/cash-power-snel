/* eslint-disable @typescript-eslint/restrict-plus-operands */
import React, { useEffect, useState } from 'react';
import PaymentMethods from './PaymentMethods';
import { Payments } from '../lib/data/networks';
import { Currency } from '../lib/data/currency';
import { AiOutlineLoading } from 'react-icons/ai';
import CurrencySelector from './CurrencySelector';
import {
  limitUSD,
  limitCDF,
  KwhTaxCDF,
  KwhTaxUSD,
  KwhPriceCDF,
  KwhPriceUSD,
} from '../lib/data/prices';

const OrderPage = (): JSX.Element => {
  const [kwh, setKwh] = useState<number>(0);
  const [amount, setAmount] = useState<number>(0);
  const [currency, setCurrency] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [selected, setSelected] = useState<string>(Payments[0].title);

  const computeEnergy = (value: number) => {
    const monetary: string = Currency[currency].value;
    if (
      (monetary === 'cdf' && value > limitCDF) ||
      (monetary === 'usd' && value > limitUSD)
    )
      value = amount;

    setAmount(value);
    if (monetary === 'cdf') {
      setKwh(value / (KwhPriceCDF + KwhTaxCDF));
    } else if (monetary === 'usd') {
      setKwh(value / (KwhPriceUSD + KwhTaxUSD));
    }
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => setLoading(false), 1500);
  };

  useEffect(() => {
    setKwh(0);
    setAmount(0);
  }, [currency]);

  return (
    <div className='flex flex-col my-10 h-full space-y-5 w-full xl:w-1/2'>
      <p className='font-bold text-primary text-2xl md:text-3xl'>
        Pay Your Bill
      </p>
      <form onSubmit={onSubmit} className='w-full'>
        <div className='flex flex-col bg-white h-full rounded-xl p-4 md:p-8 space-y-6'>
          <div className='flex flex-col space-y-2'>
            <p className='text-texture text-sm font-light'>Meter Number</p>
            <input
              placeholder='Your Meter Number'
              type='text'
              className='bg-back text-xs w-full py-5 px-6 placeholder:text-texture focus:outline-none rounded-xl'
            />
          </div>
          <div className='flex flex-col md:flex-row justify-start space-y-4 md:space-y-0 md:space-x-4 items-center w-full h-full'>
            <div className='flex flex-col w-full md:w-3/4 relative'>
              <p className='text-texture text-sm font-light'>Amount To Pay</p>
              <input
                type='number'
                value={amount ? amount : ''}
                onChange={(e) =>
                  computeEnergy(
                    e.target.value !== '' ? parseInt(e.target.value) : 0
                  )
                }
                placeholder='Your Amount To Pay'
                className='bg-back text-xs w-full py-5 px-6 placeholder:text-texture focus:outline-none rounded-xl'
              />
              <CurrencySelector currency={currency} setCurrency={setCurrency} />
            </div>
            <div className='flex flex-col justify-start items-start w-full md:w-1/4 space-y-1'>
              <p className='text-sm font-light text-texture'>Kilo Watt Hour</p>
              <div className='w-full h-full flex justify-center rounded-xl items-center py-3 md:py-3 text-tertiary border border-tertiary'>
                <p className='text-xl md:text-base font-medium'>
                  {kwh.toFixed(2)}
                </p>
              </div>
            </div>
          </div>
          <p className='pt-4 text-primary font-bold'>Select Payment Method</p>
          <PaymentMethods selected={selected} setSelected={setSelected} />
          <div className='flex flex-col space-y-2 pt-4'>
            <p className='text-primary text-sm font-medium capitalize'>
              {selected} Phone Number
            </p>
            <input
              placeholder={`Your ${selected} Phone Number`}
              type='text'
              className='bg-back text-xs w-full py-5 px-6 placeholder:text-texture focus:outline-none rounded-xl'
            />
          </div>
          <button
            type={loading ? 'button' : 'submit'}
            className='flex py-5 bg-secondary text-white rounded-xl justify-center items-center w-full text-base font-bold'
          >
            {loading ? (
              <AiOutlineLoading className='text-2xl animate-spin' />
            ) : (
              <span>Pay Now</span>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default OrderPage;
