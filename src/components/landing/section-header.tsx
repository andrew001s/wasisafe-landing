import { cn } from '@/lib/utils';

interface SectionHeaderProps {
	title: string;
	subtitle?: string;
	description?: string;
	centered?: boolean;
	className?: string;
}

export function SectionHeader({
	title,
	subtitle,
	description,
	centered = true,
	className,
}: SectionHeaderProps) {
	return (
		<div className={cn('mb-12 lg:mb-16', centered && 'text-center', className)}>
			{subtitle && (
				<p className='mb-2 font-semibold text-primary text-sm uppercase tracking-wider'>
					{subtitle}
				</p>
			)}
			<h2 className='mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text font-bold text-3xl text-transparent sm:text-4xl lg:text-5xl'>
				{title}
			</h2>
			{description && (
				<p className='mx-auto max-w-3xl text-lg text-muted-foreground'>{description}</p>
			)}
		</div>
	);
}
