import { AiOutlineSetting, AiOutlineUser } from 'react-icons/ai';
import { MdOutlineAnalytics, MdOutlineCreditCard, MdOutlineFolder, MdOutlinePieChart, MdOutlineWbSunny } from 'react-icons/md';

type IMenu = {
    title: string;
    icon: JSX.Element;
};

export const Menu: IMenu[] = [
    {
        title: 'Dashboard',
        icon: <MdOutlineAnalytics />,
    },
    {
        icon: <MdOutlinePieChart className='text-2xl' />,
        title: 'Summary',
    },
    {
        icon: <MdOutlineCreditCard className='text-2xl' />,
        title: 'Payments',
    },
    {
        icon: <MdOutlineWbSunny className='text-2xl' />,
        title: 'Energy',
    },
    {
        icon: <MdOutlineFolder className='text-2xl' />,
        title: 'Properties',
    },
];
