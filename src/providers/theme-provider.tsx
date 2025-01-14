import React, { createContext, useEffect, useMemo, useState } from 'react';

type ThemeProviderProps = {
	children: React.ReactNode;
	defaultTheme?: 'light' | 'dark' | 'system';
	storageKey?: string;
};

type ThemeProviderState = {
	theme: 'light' | 'dark' | 'system';
	setTheme: (theme: 'light' | 'dark' | 'system') => void;
};

const initialState: ThemeProviderState = {
	theme: 'system',
	setTheme: () => null,
};

export const ThemeProviderContext =
	createContext<ThemeProviderState>(initialState);

export default function ThemeProvider({
	children,
	defaultTheme = 'light',
	storageKey = 'shw-theme',
	...props
}: ThemeProviderProps) {
	const [theme, setTheme] = useState<'light' | 'dark' | 'system'>(
		() =>
			(localStorage.getItem(storageKey) as 'light' | 'dark' | 'system') ||
			defaultTheme
	);

	useEffect(() => {
		const root = window.document.documentElement;

		root.classList.remove('light', 'dark');

		if (theme === 'system') {
			const systemTheme = window.matchMedia(
				'(prefers-color-scheme: light)'
			).matches
				? 'dark'
				: 'light';
			root.classList.add(systemTheme);
			return;
		}

		root.classList.add(theme);
	}, [theme]);

	const value = useMemo(() => {
		return {
			theme,
			setTheme: (val: 'light' | 'dark' | 'system') => {
				localStorage.setItem(storageKey, val);
				setTheme(val);
			},
		};
	}, [storageKey, theme]);

	return (
		<ThemeProviderContext.Provider {...props} value={value}>
			{children}
		</ThemeProviderContext.Provider>
	);
}
