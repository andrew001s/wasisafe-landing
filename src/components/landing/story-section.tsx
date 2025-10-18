'use client';

import { motion } from 'framer-motion';
import { Heart, Shield, Target, Users } from 'lucide-react';
import { fadeInLeft, fadeInRight } from '@/utils/animations';
import { AnimatedSection } from './animated-section';
import { SectionContainer } from './section-container';
import { SectionHeader } from './section-header';

export function StorySection() {
	return (
		// biome-ignore lint/correctness/useUniqueElementIds: <Navigation Id>
		<SectionContainer id='story' className='bg-gradient-to-b from-background to-muted/30'>
			<SectionHeader
				subtitle='Nuestra Historia'
				title='Nació de la Necesidad, Creció con la Comunidad'
				description='WasiSafe surgió de la visión de crear vecindarios más seguros a través de la tecnología y la colaboración ciudadana.'
			/>

			<div className='mb-16 grid items-center gap-12 lg:grid-cols-2'>
				<AnimatedSection>
					<motion.div variants={fadeInLeft} className='space-y-6'>
						<div className='prose prose-lg dark:prose-invert'>
							<p className='text-lg text-muted-foreground leading-relaxed'>
								En cada barrio, en cada comunidad, existe el deseo innato de proteger a quienes
								amamos. Pero la inseguridad no discrimina, y los métodos tradicionales ya no son
								suficientes.
							</p>
							<p className='text-lg text-muted-foreground leading-relaxed'>
								<span className='font-semibold text-foreground'>WasiSafe</span> nace de la necesidad
								de evolucionar, de usar la tecnología no como un lujo, sino como un derecho para
								todos. Creemos que cada ciudadano merece vivir en paz, caminar tranquilo por su
								barrio, y saber que su comunidad lo respalda.
							</p>
							<p className='text-lg text-muted-foreground leading-relaxed'>
								Combinamos drones inteligentes, cámaras conectadas, alertas en tiempo real y una red
								de vecinos activos para crear un escudo de protección comunitaria. No somos solo una
								app, somos un movimiento.
							</p>
						</div>
					</motion.div>
				</AnimatedSection>

				<AnimatedSection>
					<motion.div variants={fadeInRight} className='space-y-4'>
						<div className='relative h-[400px] overflow-hidden rounded-2xl shadow-2xl'>
							<div className='absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-500/20 to-purple-500/20'>
								<div className='text-center'>
									<Shield className='mx-auto mb-4 h-24 w-24 text-primary' />
									<p className='font-semibold text-xl'>Protegiendo juntos lo que más importa</p>
								</div>
							</div>
						</div>
					</motion.div>
				</AnimatedSection>
			</div>

			{/* Values */}
			<AnimatedSection>
				<div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-4'>
					{[
						{
							icon: Heart,
							title: 'Empatía',
							description: 'Entendemos las necesidades de cada comunidad',
						},
						{
							icon: Users,
							title: 'Colaboración',
							description: 'Juntos somos más fuertes y seguros',
						},
						{
							icon: Shield,
							title: 'Seguridad',
							description: 'Protección avanzada para todos',
						},
						{
							icon: Target,
							title: 'Innovación',
							description: 'Tecnología al servicio de las personas',
						},
					].map((value, index) => {
						const Icon = value.icon;
						return (
							<motion.div
								key={value.title}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ delay: index * 0.1 }}
								viewport={{ once: true }}
								className='rounded-xl border border-border bg-card p-6 text-center transition-shadow hover:shadow-lg'
							>
								<div className='mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10'>
									<Icon className='h-6 w-6 text-primary' />
								</div>
								<h3 className='mb-2 font-semibold text-lg'>{value.title}</h3>
								<p className='text-muted-foreground text-sm'>{value.description}</p>
							</motion.div>
						);
					})}
				</div>
			</AnimatedSection>
		</SectionContainer>
	);
}
