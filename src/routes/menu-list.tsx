import { BsGear } from 'react-icons/bs';
import { LuLayoutDashboard } from 'react-icons/lu';
import { ImBooks } from 'react-icons/im';
import { SideNavItem } from '../types/sidenav-item';
import { BookHeadphones } from 'lucide-react';
import { MdQuiz } from 'react-icons/md';
import { CgProfile } from 'react-icons/cg';

const SIDENAV_ITEMS: SideNavItem[] = [
	{
		title: 'Main',
		menuList: [
			{
				title: 'Home',
				path: '/',
				icon: <LuLayoutDashboard size={20} />,
			},
			{
				title: 'About',
				path: '/about',
				icon: <ImBooks size={20} />,
			},
			{
				title: 'Resume',
				path: '/resume',
				icon: <MdQuiz size={20} />,
			},
			{
				title: 'Portfolio',
				path: '/portfolio',
				icon: <BookHeadphones size={20} />,
			},
			{
				title: 'Services',
				path: '/services',
				icon: <BsGear size={20} />,
			},
			{
				title: 'Contact',
				path: '/contact',
				icon: <CgProfile size={20} />,
			},
		],
	},
];

export default SIDENAV_ITEMS;
