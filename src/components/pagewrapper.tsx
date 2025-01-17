import { ReactNode } from 'react';
import { useSideBarToggle } from '../hooks/use-sidebar-toggle';
import { cn } from '../lib/utils';

export default function PageWrapper({ children }: { children: ReactNode }) {
	const { toggleCollapse } = useSideBarToggle();
	const bodyStyle = cn(
		'bg-background flex flex-col mt-14 h-full overflow-y-auto',
		{
			'sm:pl-[20rem]': !toggleCollapse,
			'sm:pl-[5.4rem]': toggleCollapse,
		}
	);

	return <div className={bodyStyle}>{children}</div>;
}
