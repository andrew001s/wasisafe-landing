'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import { useState } from 'react';
import { features } from '@/data/landing-data';
import { SectionContainer } from './section-container';

export function FeaturesSection() {
	const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

	return (
		// biome-ignore lint/correctness/useUniqueElementIds: <Navigation Id>
		<SectionContainer id='features' className='bg-background dark:bg-black'>
			{/* Section Header - Apple Style */}
			<motion.div
				initial={{ opacity: 0, y: 30 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.8 }}
				className='mb-20 text-center'
			>
				<h2 className='mb-6 font-bold text-5xl text-foreground leading-tight md:text-6xl lg:text-7xl dark:text-white'>
					Tecnología y tu seguridad.
					<br />
					Dinamita pura.
				</h2>
				<p className='mx-auto max-w-4xl text-muted-foreground text-xl leading-relaxed md:text-2xl dark:text-gray-400'>
					WasiSafe estrena un espectacular diseño y trae mejoras revolucionarias que llevan la
					protección de tu comunidad a un nuevo nivel.{' '}
					<span className='font-semibold text-foreground dark:text-white'>
						El nuevo e intuitivo sistema de alertas
					</span>{' '}
					te brinda más poder y flexibilidad.
				</p>
			</motion.div>

			{/* Expandable Feature Cards */}
			<div className='grid gap-6 md:grid-cols-3'>
				{features.map((feature, index) => {
					const Icon = feature.icon;
					return (
						<motion.div
							key={feature.id}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.1 }}
							className='group relative cursor-pointer overflow-hidden rounded-3xl bg-card p-8 transition-all duration-300 hover:scale-105 dark:bg-zinc-900 dark:hover:bg-zinc-800'
							onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
						>
							{/* Icon and expand button */}
							<div className='mb-6 flex items-start justify-between'>
								<div className={`rounded-2xl bg-gradient-to-br p-3 ${feature.color}`}>
									<Icon className='h-8 w-8 text-white' />
								</div>
								<motion.div
									animate={{ rotate: expandedIndex === index ? 45 : 0 }}
									transition={{ duration: 0.3 }}
								>
									<Plus className='h-8 w-8 text-foreground dark:text-white' />
								</motion.div>
							</div>

							{/* Title */}
							<h3 className='mb-2 font-semibold text-2xl text-foreground dark:text-white'>
								{feature.title}
							</h3>
							<p className='mb-4 text-muted-foreground dark:text-gray-400'>{feature.description}</p>

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
										<p className='border-border border-t pt-4 text-muted-foreground text-sm dark:border-zinc-700 dark:text-gray-400'>
											Descubre más sobre cómo {feature.title.toLowerCase()} puede transformar la
											seguridad de tu comunidad con tecnología de última generación.
										</p>
									</motion.div>
								)}
							</AnimatePresence>

							{/* Gradient overlay on hover */}
							<div
								className={`-z-10 absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-300 group-hover:opacity-5 ${feature.color}`}
							/>
						</motion.div>
					);
				})}
			</div>

			{/* Additional highlight - Apple style */}
			<motion.div
				initial={{ opacity: 0, y: 30 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				className='mt-20 rounded-3xl border border-border bg-gradient-to-r from-card to-card/50 p-8 text-center md:p-12 dark:border-zinc-800 dark:from-zinc-900 dark:to-zinc-900/50'
			>
				<h3 className='mb-4 font-bold text-3xl text-foreground md:text-4xl dark:text-white'>
					¿Listo para experimentar la seguridad del futuro?
				</h3>
				<p className='mx-auto mb-6 max-w-2xl text-lg text-muted-foreground dark:text-gray-400'>
					Únete a miles de familias que ya confían en WasiSafe para proteger sus hogares y
					vecindarios.
				</p>
				<div className='flex flex-wrap justify-center gap-8 text-muted-foreground text-sm dark:text-gray-400'>
					<div className='flex items-center gap-2'>
						<div className='h-2 w-2 rounded-full bg-green-500' />
						<span>Sin costo de instalación</span>
					</div>
					<div className='flex items-center gap-2'>
						<div className='h-2 w-2 rounded-full bg-green-500' />
						<span>Soporte 24/7</span>
					</div>
					<div className='flex items-center gap-2'>
						<div className='h-2 w-2 rounded-full bg-green-500' />
						<span>Actualizaciones constantes</span>
					</div>
				</div>
			</motion.div>
		</SectionContainer>
	);
}
