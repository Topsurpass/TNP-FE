import { useLocation, Link } from 'react-router-dom';
import { useState } from 'react';
import { BsChevronRight } from 'react-icons/bs';
import { MenuList } from '../types/sidenav-item';
import { useSideBarToggle } from '../hooks/use-sidebar-toggle';
import { cn } from '../lib/utils';

export default function SideBarMenuItem({ item }: { item: MenuList }) {
	const { toggleCollapse } = useSideBarToggle();

	const location = useLocation();
	const { pathname } = location;

	const [subMenuOpen, setSubMenuOpen] = useState(false);

	const toggleSubMenu = () => {
		setSubMenuOpen(!subMenuOpen);
	};

	const inactiveLink = cn(
		'flex items-center min-h-[40px] h-full  py-2 px-4 hover:text-caution-foreground',
		'hover:bg-caution rounded-md transition duration-200',
		{ 'justify-center': toggleCollapse }
	);

	const activeLink = cn(
		'bg-caution text-foreground shadow-md border border-gray-400',
		{
			// "bg-sidebar-muted": !modalIsOpen,
		}
	);

	const navMenuDropdownItem =
		'text-red py-2 px-4 hover:text-caution transition duration-200 rounded-md';

	const dropdownMenuHeaderLink = cn(inactiveLink, {
		' rounded-b-none': subMenuOpen,
		'w-full': true,
	});

	return (
		<div>
			{item.submenu ? (
				// <div className="min-w-[18px]">
				<div className="min-w-[18px]">
					<button
						type="button"
						className={`${dropdownMenuHeaderLink} ${
							pathname.includes(item.path) ? activeLink : ''
						}`}
						onClick={toggleSubMenu}
					>
						<div>{item.icon}</div>
						{!toggleCollapse && (
							<div className="flex flex-1 items-center justify-between">
								<span className="ml-3 cursor-pointer text-base font-semibold leading-6">
									{item.title}
								</span>
								<div>
									<BsChevronRight
										className={`${
											subMenuOpen ? 'rotate-90' : ''
										} ml-auto cursor-pointer stroke-2 text-xs`}
									/>
								</div>
							</div>
						)}
					</button>
					{subMenuOpen && !toggleCollapse && (
						<div className="border-l-4 bg-royal/20">
							<div className="grid gap-y-3 px-8 py-0 leading-3">
								{item.subMenuItems?.map((subItem) => {
									return (
										<Link
											key={subItem.path}
											to={subItem.path}
											className={`${navMenuDropdownItem} ${
												subItem.path === pathname
													? 'font-medium text-caution'
													: ''
											}`}
										>
											<span className="text-base font-normal">
												{subItem.title}
											</span>
										</Link>
									);
								})}
							</div>
						</div>
					)}
				</div>
			) : (
				<Link
					to={item.path}
					// className={`${inactiveLink} ${item.path === pathname ? activeLink : ""}`}
					className={`${inactiveLink} ${pathname.includes(item.path) ? activeLink : ''}`}
				>
					<div className="min-w-[20px]">{item.icon}</div>
					{!toggleCollapse && (
						<span className="ml-3 font-semibold leading-6">
							{item.title}
						</span>
					)}
				</Link>
			)}
		</div>
	);
}
