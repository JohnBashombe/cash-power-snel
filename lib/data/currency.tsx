import { DRCongo, USA } from '../../components/vectors/Flags';

type ICurrency = { name: string; value: string; icon: JSX.Element };
export const Currency: ICurrency[] = [
  {
    name: 'CDF',
    value: 'cdf',
    icon: <DRCongo />,
  },
  {
    name: 'USD',
    value: 'usd',
    icon: <USA />,
  },
];