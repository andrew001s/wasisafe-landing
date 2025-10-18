'use client';

import { motion } from 'framer-motion';
import { Globe, Lightbulb, Rocket, Users } from 'lucide-react';
import { fadeInUp } from '@/utils/animations';
import { AnimatedSection } from './animated-section';
import { SectionContainer } from './section-container';
import { SectionHeader } from './section-header';

export function VisionSection() {
	return (
		// biome-ignore lint/correctness/useUniqueElementIds: <Navigation Id>
		<SectionContainer id='vision' className='bg-background'>
			<SectionHeader
				subtitle='Nuestra Visión'
				title='Construyendo el Futuro de la Seguridad Ciudadana'
				description='Un mundo donde cada comunidad tenga acceso a tecnología de seguridad de clase mundial.'
			/>

			<div className='mb-16 grid gap-12 md:grid-cols-2'>
				<AnimatedSection>
					<motion.div variants={fadeInUp} className='space-y-6'>
						<div className='flex items-start gap-4'>
							<div className='flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500'>
								<Lightbulb className='h-6 w-6 text-white' />
							</div>
							<div>
								<h3 className='mb-2 font-semibold text-xl'>Nuestra Misión</h3>
								<p className='text-muted-foreground'>
									Democratizar el acceso a tecnología de seguridad avanzada, empoderando a las
									comunidades para que tomen el control de su propia protección. Creemos que la
									seguridad no es un privilegio, sino un derecho fundamental.
								</p>
							</div>
						</div>

						<div className='flex items-start gap-4'>
							<div className='flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-pink-500'>
								<Rocket className='h-6 w-6 text-white' />
							</div>
							<div>
								<h3 className='mb-2 font-semibold text-xl'>Nuestra Meta</h3>
								<p className='text-muted-foreground'>
									Expandir WasiSafe a 100 ciudades en los próximos 3 años, protegiendo a millones de
									familias y reduciendo la criminalidad en un 50% en cada comunidad que adoptemos.
								</p>
							</div>
						</div>
					</motion.div>
				</AnimatedSection>

				<AnimatedSection>
					<motion.div variants={fadeInUp} className='space-y-6'>
						<div className='flex items-start gap-4'>
							<div className='flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-green-500 to-emerald-500'>
								<Globe className='h-6 w-6 text-white' />
							</div>
							<div>
								<h3 className='mb-2 font-semibold text-xl'>Impacto Global</h3>
								<p className='text-muted-foreground'>
									Aspiramos a convertirnos en el estándar global de seguridad comunitaria,
									compartiendo nuestra tecnología y conocimiento con comunidades de todo el mundo
									que buscan protección y paz.
								</p>
							</div>
						</div>

						<div className='flex items-start gap-4'>
							<div className='flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-red-500'>
								<Users className='h-6 w-6 text-white' />
							</div>
							<div>
								<h3 className='mb-2 font-semibold text-xl'>El Equipo</h3>
								<p className='text-muted-foreground'>
									Somos un equipo multidisciplinario de ingenieros, diseñadores, expertos en
									seguridad y activistas comunitarios unidos por una visión: hacer del mundo un
									lugar más seguro para todos.
								</p>
							</div>
						</div>
					</motion.div>
				</AnimatedSection>
			</div>

			{/* Timeline */}
			<AnimatedSection>
				<div className='rounded-2xl border border-border bg-gradient-to-br from-card to-card/50 p-8 md:p-12'>
					<h3 className='mb-12 text-center font-bold text-2xl'>Nuestro Recorrido</h3>
					<div className='grid gap-8 md:grid-cols-4'>
						{[
							{
								year: '2023',
								title: 'Fundación',
								description: 'Inicio del proyecto WasiSafe',
							},
							{
								year: '2024',
								title: 'Piloto',
								description: 'Primeras 5 comunidades protegidas',
							},
							{
								year: '2025',
								title: 'Expansión',
								description: 'Lanzamiento en 20 ciudades',
							},
							{
								year: '2026',
								title: 'Global',
								description: 'Presencia internacional',
							},
						].map((milestone, index) => (
							<motion.div
								key={milestone.year}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ delay: index * 0.1 }}
								viewport={{ once: true }}
								className='text-center'
							>
								<div className='mb-2 font-bold text-3xl text-primary'>{milestone.year}</div>
								<div className='mb-1 font-semibold'>{milestone.title}</div>
								<div className='text-muted-foreground text-sm'>{milestone.description}</div>
							</motion.div>
						))}
					</div>
				</div>
			</AnimatedSection>
		</SectionContainer>
	);
}
