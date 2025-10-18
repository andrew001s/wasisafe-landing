'use client';

import { motion } from 'framer-motion';
import { benefits } from '@/data/landing-data';
import { staggerContainer } from '@/utils/animations';
import { AnimatedSection } from './animated-section';
import { BenefitCard } from './benefit-card';
import { SectionContainer } from './section-container';
import { SectionHeader } from './section-header';

export function BenefitsSection() {
	return (
		// biome-ignore lint/correctness/useUniqueElementIds: <Navigation Id>
		<SectionContainer id='benefits' className='bg-gradient-to-b from-muted/30 to-background'>
			<SectionHeader
				subtitle='Beneficios'
				title='Transforma tu Comunidad'
				description='Descubre cómo WasiSafe mejora la seguridad y calidad de vida en tu vecindario.'
			/>

			<AnimatedSection>
				<motion.div
					variants={staggerContainer}
					initial='initial'
					whileInView='animate'
					viewport={{ once: true, amount: 0.2 }}
					className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'
				>
					{benefits.map((benefit, index) => (
						<BenefitCard key={benefit.id} benefit={benefit} index={index} />
					))}
				</motion.div>
			</AnimatedSection>

			{/* Impact section */}
			<AnimatedSection className='mt-16'>
				<div className='rounded-2xl border border-border bg-card p-8 md:p-12'>
					<div className='grid gap-8 text-center md:grid-cols-3'>
						<div>
							<div className='mb-2 font-bold text-4xl text-primary md:text-5xl'>12+</div>
							<div className='text-muted-foreground text-sm uppercase tracking-wider'>
								Ciudades activas
							</div>
						</div>
						<div>
							<div className='mb-2 font-bold text-4xl text-primary md:text-5xl'>500+</div>
							<div className='text-muted-foreground text-sm uppercase tracking-wider'>
								Vecindarios protegidos
							</div>
						</div>
						<div>
							<div className='mb-2 font-bold text-4xl text-primary md:text-5xl'>98%</div>
							<div className='text-muted-foreground text-sm uppercase tracking-wider'>
								Satisfacción de usuarios
							</div>
						</div>
					</div>
				</div>
			</AnimatedSection>
		</SectionContainer>
	);
}
