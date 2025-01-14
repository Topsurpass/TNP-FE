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
				title: 'Dashboard',
				path: '/',
				icon: <LuLayoutDashboard size={20} />,
			},
			//{
			//	title: 'Financial',
			//	path: '/financial',
			//	icon: <BsKanban size={20} />,
			//	submenu: true,
			//	subMenuItems: [
			//		{ title: 'Overview', path: '/financial/overview' },
			//		{ title: 'Transactions', path: '/financial/transactions' },
			//		{ title: 'Requisitions', path: '/financial/requisitions' },
			//		{
			//			title: 'Bank Statements',
			//			path: '/financial/bank-statement',
			//		},
			//		{ title: 'Reports', path: '/financial/reports' },
			//	],
			//},
			{
				title: 'Teachings',
				path: '/teachings',
				icon: <ImBooks size={20} />,
			},
			{
				title: 'Quizzes',
				path: '/quizzes',
				icon: <MdQuiz size={20} />,
			},
			{
				title: 'Messages',
				path: '/messages',
				icon: <BookHeadphones size={20} />,
			},
		],
	},
	{
		title: 'Others',
		menuList: [
			{
				title: 'Setting',
				path: '/setting',
				icon: <BsGear size={20} />,
			},
			{
				title: 'My profile',
				path: '/profile',
				icon: <CgProfile size={20} />,
			},
		],
	},
];

export default SIDENAV_ITEMS;
