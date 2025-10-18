'use client';

import { ThemeToggle } from '@/components/theme-toggle';
import { ThemeProvider } from '@/context/theme-context';

export function Providers({ children }: { children: React.ReactNode }) {
	return (
		<ThemeProvider>
			<ThemeToggle />
			{children}
		</ThemeProvider>
	);
}
