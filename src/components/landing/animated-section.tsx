'use client';

import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { cn } from '@/lib/utils';
import { fadeInUp } from '@/utils/animations';

interface AnimatedSectionProps {
	children: React.ReactNode;
	className?: string;
	delay?: number;
}

export function AnimatedSection({ children, className, delay = 0 }: AnimatedSectionProps) {
	const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

	return (
		<motion.div
			ref={ref}
			initial='initial'
			animate={isVisible ? 'animate' : 'initial'}
			variants={fadeInUp}
			transition={{ delay }}
			className={cn(className)}
		>
			{children}
		</motion.div>
	);
}
