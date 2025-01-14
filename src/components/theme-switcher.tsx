import { SunIcon, MoonIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import useTheme from '@/hooks/useTheme';

export default function ThemeSwitcher() {
	const { setTheme, theme } = useTheme();

	const handleToggleTheme = () => {
		setTheme(theme === 'dark' ? 'light' : 'dark');
	};

	return (
		<Button
			variant="outline"
			size="icon"
			className="rounded-full border-0 bg-foreground p-0 text-background outline-none hover:bg-muted hover:text-muted-foreground"
			onClick={handleToggleTheme}
		>
			{theme === 'dark' ? (
				<SunIcon className="h-6 w-6" />
			) : (
				<MoonIcon className="h-6 w-6" />
			)}
		</Button>
	);
}
