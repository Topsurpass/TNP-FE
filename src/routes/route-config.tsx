import ErrorPage from '@/pages/error';
import About from '@/pages/about';
import RootLayout from '@/layout/root-layout';
import Home from '@/pages/home';
import Resume from '@/pages/resume';
import Portfolio from '@/pages/portfolio';
import Contact from '@/pages/contact';
import Services from '@/pages/services';

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
				path: 'about',
				element: <About />,
			},
			{
				path: 'resume',
				element: <Resume />,
			},
			{
				path: 'portfolio',
				element: <Portfolio />,
			},
			{
				path: 'services',
				element: <Services />,
			},
			{
				path: 'contact',
				element: <Contact />,
			},
		],
	},
	{
		path: '*',
		element: <ErrorPage />,
	},
];

export default routeConfig;
