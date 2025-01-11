import {
	BsGear,
	// BsKanban
} from 'react-icons/bs';
import { LuLayoutDashboard } from 'react-icons/lu';
import { BsKanban } from 'react-icons/bs';
import { RiTeamLine, RiExchange2Line } from 'react-icons/ri';
import { IoCalendarNumberOutline, IoPeopleSharp } from 'react-icons/io5';
import { SideNavItem } from '../types/sidenav-item';

const SIDENAV_ITEMS: SideNavItem[] = [
	{
		title: 'Main',
		menuList: [
			{
				title: 'Dashboard',
				path: '/dashboard',
				icon: <LuLayoutDashboard size={20} />,
			},
			{
				title: 'Financial',
				path: '/financial',
				icon: <BsKanban size={20} />,
				submenu: true,
				subMenuItems: [
					{ title: 'Overview', path: '/financial/overview' },
					{ title: 'Transactions', path: '/financial/transactions' },
					{ title: 'Requisitions', path: '/financial/requisitions' },
					{
						title: 'Bank Statements',
						path: '/financial/bank-statement',
					},
					{ title: 'Reports', path: '/financial/reports' },
				],
			},
			{
				title: 'Church Branches',
				path: '/branches',
				icon: <IoPeopleSharp size={20} />,
			},
			{
				title: "Members' Mgt.",
				path: '/members',
				icon: <IoPeopleSharp size={20} />,
			},
			{
				title: 'Ministries',
				path: '/ministries',
				icon: <RiExchange2Line size={20} />,
			},
			{
				title: 'Missional Communities',
				path: '/mc',
				icon: <RiTeamLine size={20} />,
			},
		],
	},
	{
		title: 'Others',
		menuList: [
			{
				title: 'Communications',
				path: '/communications',
				icon: <BsGear size={20} />,
				submenu: true,
				subMenuItems: [
					{ title: 'SMS', path: '/communications/sms' },
					{ title: 'EMAIL', path: '/communications/email' },
				],
			},
			{
				title: 'Events',
				path: '/event',
				icon: <IoCalendarNumberOutline size={20} />,
			},
			{
				title: 'Setting',
				path: '/setting',
				icon: <BsGear size={20} />,
			},
		],
	},
];

export default SIDENAV_ITEMS;
