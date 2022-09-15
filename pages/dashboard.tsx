import React from 'react';
import DashboardTab from '../components/DashboardTab';
import OrderPage from '../components/OrderPage';
import Statistics from '../components/Statistics';

const Dashboard = (): JSX.Element => {
  return (
    <div className='flex w-full h-full'>
      <div className='flex-col h-full w-full'>
        <DashboardTab />
        <div className='flex flex-col w-full xl:flex-row justify-start items-start mb-10 space-y-5 xl:space-y-0 xl:space-x-8'>
          <OrderPage />
          <Statistics />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
