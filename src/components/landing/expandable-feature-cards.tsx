'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import { useState } from 'react';

interface FeatureCard {
	icon: React.ReactNode;
	title: string;
	subtitle: string;
	color: string;
	expandedContent: string;
}

interface ExpandableFeatureCardsProps {
	features: FeatureCard[];
}

export function ExpandableFeatureCards({ features }: ExpandableFeatureCardsProps) {
	const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

	return (
		<section className='bg-black py-20 text-white'>
			<div className='mx-auto max-w-7xl px-4'>
				<div className='grid gap-6 md:grid-cols-3'>
					{features.map((feature, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.1 }}
							className='group relative cursor-pointer overflow-hidden rounded-3xl bg-zinc-900 p-8 transition-all duration-300 hover:scale-105'
							onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
						>
							{/* Icon and color accent */}
							<div className='mb-6 flex items-start justify-between'>
								<div className={`text-${feature.color}-500`}>{feature.icon}</div>
								<motion.div
									animate={{ rotate: expandedIndex === index ? 45 : 0 }}
									transition={{ duration: 0.3 }}
								>
									<Plus className='h-8 w-8 text-white' />
								</motion.div>
							</div>

							{/* Title */}
							<h3 className='mb-2 font-semibold text-2xl'>{feature.title}</h3>
							<p className={`text-${feature.color}-400 mb-4`}>{feature.subtitle}</p>

							{/* Expanded content */}
							<AnimatePresence>
								{expandedIndex === index && (
									<motion.div
										initial={{ opacity: 0, height: 0 }}
										animate={{ opacity: 1, height: 'auto' }}
										exit={{ opacity: 0, height: 0 }}
										transition={{ duration: 0.3 }}
										className='overflow-hidden'
									>
										<p className='pt-4 text-gray-400 text-sm'>{feature.expandedContent}</p>
									</motion.div>
								)}
							</AnimatePresence>

							{/* Gradient overlay on hover */}
							<div
								className={`absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-300 group-hover:opacity-10 from-${feature.color}-500 to-transparent`}
							/>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
