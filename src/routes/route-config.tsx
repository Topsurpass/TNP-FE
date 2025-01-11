//import ErrorPage from '@/pages/error';
import ErrorPage from '../pages/error';
import Home from '../pages/home';
import RootLayout from '../layout/root-layout';
import Dashboard from '../pages/dashboard';

const routeConfig = [
	{
		path: '/',
		element: <RootLayout />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: '/dashboard',
				element: <Dashboard />,
			},
		],
	},
	{
		path: '*',
		element: <ErrorPage />,
	},
];

export default routeConfig;
