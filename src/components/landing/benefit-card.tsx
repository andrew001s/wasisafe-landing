'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import type { Benefit } from '@/types/landing';
import { fadeInUp } from '@/utils/animations';

interface BenefitCardProps {
	benefit: Benefit;
	index?: number;
}

export function BenefitCard({ benefit, index = 0 }: BenefitCardProps) {
	const Icon = benefit.icon;

	return (
		<motion.div variants={fadeInUp} transition={{ delay: index * 0.1 }} className='h-full'>
			<Card className='h-full border-primary/20 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm transition-all duration-300 hover:border-primary/50'>
				<CardContent className='p-6'>
					<div className='flex items-start gap-4'>
						<div className='flex-shrink-0'>
							<div className='flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10'>
								<Icon className='h-6 w-6 text-primary' />
							</div>
						</div>
						<div className='flex-1'>
							<div className='mb-2 flex items-start justify-between'>
								<h3 className='font-semibold text-lg'>{benefit.title}</h3>
								{benefit.stat && (
									<span className='font-bold text-2xl text-primary'>{benefit.stat}</span>
								)}
							</div>
							<p className='text-muted-foreground text-sm'>{benefit.description}</p>
						</div>
					</div>
				</CardContent>
			</Card>
		</motion.div>
	);
}
