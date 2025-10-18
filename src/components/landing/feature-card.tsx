'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import type { Feature } from '@/types/landing';
import { scaleIn } from '@/utils/animations';

interface FeatureCardProps {
	feature: Feature;
	index?: number;
}

export function FeatureCard({ feature, index = 0 }: FeatureCardProps) {
	const Icon = feature.icon;

	return (
		<motion.div
			variants={scaleIn}
			transition={{ delay: index * 0.1 }}
			whileHover={{ scale: 1.05 }}
			className='h-full'
		>
			<Card className='h-full border-2 transition-shadow duration-300 hover:border-primary/50 hover:shadow-xl'>
				<CardHeader>
					<div
						className={cn(
							'mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br',
							feature.color,
						)}
					>
						<Icon className='h-7 w-7 text-white' />
					</div>
					<CardTitle className='text-xl'>{feature.title}</CardTitle>
				</CardHeader>
				<CardContent>
					<p className='text-muted-foreground'>{feature.description}</p>
				</CardContent>
			</Card>
		</motion.div>
	);
}
