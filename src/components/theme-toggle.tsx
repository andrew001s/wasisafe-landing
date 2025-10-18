'use client';

import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/context/theme-context';

export function ThemeToggle() {
	const { theme, toggleTheme } = useTheme();

	return (
		<Button
			variant='outline'
			size='icon'
			onClick={toggleTheme}
			className='fixed top-4 right-4 z-50 h-12 w-12 rounded-full border-2 shadow-lg transition-all hover:scale-110'
			aria-label='Toggle theme'
		>
			{theme === 'light' ? (
				<Moon className='h-5 w-5 transition-all' />
			) : (
				<Sun className='h-5 w-5 transition-all' />
			)}
		</Button>
	);
}
