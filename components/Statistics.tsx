/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React from 'react';
import {
  KwhTaxCDF,
  KwhTaxUSD,
  KwhPriceCDF,
  KwhPriceUSD,
} from '../lib/data/prices';
import PriceStats from './StatisticsCard';

const Statistics = (): JSX.Element => {
  return (
    <div className='flex flex-col justify-center my-10 lg:my-10 md:py-10 h-full space-y-5 w-full xl:w-1/2'>
      <p className='font-bold text-primary text-2xl md:text-3xl'>
        Info & Statistics
      </p>
      <div className='w-full grid grid-cols-1 gap-10 md:grid-cols-2 rounded-xl relative'>
        <PriceStats
          title={`CDF ${KwhPriceCDF.toFixed(2)}`}
          subTitle='Price Per KWH'
        />
        <PriceStats
          title={`USD ${KwhPriceUSD.toFixed(2)}`}
          subTitle='Price Per KWH'
        />
        <PriceStats
          title={`CDF ${KwhTaxCDF.toFixed(2)}`}
          subTitle='Tax Per KWH'
        />
        <PriceStats
          title={`USD ${KwhTaxUSD.toFixed(2)}`}
          subTitle='Tax Per KWH'
        />
        <PriceStats title={`15,761 KWH`} subTitle='Total KWH Sold' />
        <PriceStats title={`7.09 KWH`} subTitle='Average KWH per House' />
      </div>
    </div>
  );
};

export default Statistics;
