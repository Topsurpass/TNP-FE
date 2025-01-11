import { Outlet } from 'react-router-dom';
import Header from '../components/header';
import PageWrapper from '../components/pagewrapper';
import SideBar from '../components/sidebar';

export default function RootLayout() {
	return (
		<div>
			<SideBar />
			<div className="flex h-full w-full flex-col">
				<Header />
				<PageWrapper>
					<Outlet />
				</PageWrapper>
			</div>
		</div>
	);
}
