import React from 'react';
import DashboardTab from '../components/DashboardTab';

const Dashboard = (): JSX.Element => {
  return (
    <div className=' flex w-full h-full'>
      <div className='flex-col'>
        <DashboardTab />
      </div>
    </div>
  );
};

export default Dashboard;
