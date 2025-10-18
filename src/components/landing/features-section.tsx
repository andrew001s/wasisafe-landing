'use client';

import { motion } from 'framer-motion';
import { features } from '@/data/landing-data';
import { staggerContainer } from '@/utils/animations';
import { AnimatedSection } from './animated-section';
import { FeatureCard } from './feature-card';
import { SectionContainer } from './section-container';
import { SectionHeader } from './section-header';

export function FeaturesSection() {
	return (
		// biome-ignore lint/correctness/useUniqueElementIds: <Navigation Id>
		<SectionContainer id='features' className='bg-background'>
			<SectionHeader
				subtitle='Características'
				title='Tecnología de Punta al Servicio de tu Seguridad'
				description='Descubre las funcionalidades que hacen de WasiSafe la plataforma más completa de seguridad ciudadana.'
			/>

			<AnimatedSection>
				<motion.div
					variants={staggerContainer}
					initial='initial'
					whileInView='animate'
					viewport={{ once: true, amount: 0.2 }}
					className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8'
				>
					{features.map((feature, index) => (
						<FeatureCard key={feature.id} feature={feature} index={index} />
					))}
				</motion.div>
			</AnimatedSection>

			{/* Additional highlight */}
			<AnimatedSection className='mt-16'>
				<div className='rounded-2xl border border-primary/20 bg-gradient-to-r from-primary/10 via-blue-500/10 to-purple-500/10 p-8 text-center md:p-12'>
					<h3 className='mb-4 font-bold text-2xl md:text-3xl'>
						¿Listo para experimentar la seguridad del futuro?
					</h3>
					<p className='mx-auto mb-6 max-w-2xl text-lg text-muted-foreground'>
						Únete a miles de familias que ya confían en WasiSafe para proteger sus hogares y
						vecindarios.
					</p>
					<div className='flex flex-wrap justify-center gap-8 text-muted-foreground text-sm'>
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
				</div>
			</AnimatedSection>
		</SectionContainer>
	);
}
