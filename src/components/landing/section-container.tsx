import { cn } from '@/lib/utils';

interface SectionContainerProps {
	children: React.ReactNode;
	className?: string;
	id?: string;
}

export function SectionContainer({ children, className, id }: SectionContainerProps) {
	return (
		<section id={id} className={cn('px-4 py-20 sm:px-6 lg:px-8', className)}>
			<div className='mx-auto max-w-7xl'>{children}</div>
		</section>
	);
}
