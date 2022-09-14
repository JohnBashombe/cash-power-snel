import { AiFillBank, AiOutlineBulb } from 'react-icons/ai';
import { MdHouse, MdOutlinePhoneAndroid, MdOutlineWaterDrop, MdOutlineWifi, MdSchool } from 'react-icons/md';

type ITabs = { title: string; icon: JSX.Element };
export const Tabs: ITabs[] = [
    {
        title: 'Electricity',
        icon: <AiOutlineBulb className='w-5 h-5 md:w-6 md:h-6' />,
    },
    {
        title: 'Water',
        icon: <MdOutlineWaterDrop className='w-5 h-5 md:w-6 md:h-6' />,
    },
    {
        title: 'Internet',
        icon: <MdOutlineWifi className='w-5 h-5 md:w-6 md:h-6' />,
    },
    {
        title: 'Airtime',
        icon: <MdOutlinePhoneAndroid className='w-5 h-5 md:w-6 md:h-6' />,
    },
    {
        title: 'School Fees',
        icon: <MdSchool className='w-5 h-5 md:w-6 md:h-6' />,
    },
    {
        title: 'House Rent',
        icon: <MdHouse className='w-5 h-5 md:w-6 md:h-6' />,
    },
    {
        title: 'Bank Loan',
        icon: <AiFillBank className='w-5 h-5 md:w-6 md:h-6' />,
    },
];