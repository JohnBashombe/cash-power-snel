import { AiOutlineSetting, AiOutlineUser } from 'react-icons/ai';


type IMenu = {
    title: string;
    icon: JSX.Element;
};
export const BottomMenu: IMenu[] = [
    {
        title: 'Settings',
        icon: <AiOutlineSetting className='text-2xl' />
    },
    {
        icon: <AiOutlineUser className='text-2xl' />,
        title: 'Account',
    },
];