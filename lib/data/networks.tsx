import { AfricellLogo, AirtelLogo, OrangeLogo, VodacomLogo } from '../../components/vectors/Networks';

interface IPayments { icon: JSX.Element; title: string };
export const Payments: IPayments[] = [
    {
      title: 'Airtel',
      icon: <AirtelLogo className='rounded-xl w-16' />,
    },
    {
      title: 'Vodacom',
      icon: <VodacomLogo className='rounded-xl w-20' />,
    },
    {
      title: 'Orange',
      icon: <OrangeLogo className='rounded-xl w-20' />,
    },
    {
      title: 'Africell',
      icon: <AfricellLogo className='rounded-xl w-16' />,
    },
  ];