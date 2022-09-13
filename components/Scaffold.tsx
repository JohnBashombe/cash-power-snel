import React from 'react';
import { useRouter } from 'next/router';
import NotFound from '../pages/404';
import Dashboard from '../pages/dashboard';
import LandingPage from './LandingPage';

const Scaffold = (): JSX.Element => {
  const { pathname } = useRouter();
  if (pathname === '/') return <LandingPage />;
  if (pathname === '/dashboard') return <Dashboard />;
  else return <NotFound />;
};

export default Scaffold;
