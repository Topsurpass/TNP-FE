import ErrorPage from '@/pages/error';
import Teachings from '@/pages/teachings';
import RootLayout from '@/layout/root-layout';
import Dashboard from '@/pages/dashboard';
import Quizzes from '@/pages/quizzes';
import Messages from '@/pages/messages';
import Settings from '@/pages/settings';
import Profile from '@/pages/profile';

const routeConfig = [
	{
		path: '/',
		element: <RootLayout />,
		children: [
			{
				index: true,
				element: <Dashboard />,
			},
			{
				path: 'teachings',
				element: <Teachings />,
			},
			{
				path: 'quizzes',
				element: <Quizzes />,
			},
			{
				path: 'messages',
				element: <Messages />,
			},
			{
				path: 'profile',
				element: <Profile />,
			},
			{
				path: 'setting',
				element: <Settings />,
			},
		],
	},
	{
		path: '*',
		element: <ErrorPage />,
	},
];

export default routeConfig;
