'use client';

import { motion } from 'framer-motion';
import { Globe, Lightbulb, Rocket, Users } from 'lucide-react';
import { SectionContainer } from './section-container';

export function VisionSection() {
	return (
		// biome-ignore lint/correctness/useUniqueElementIds: <Navigation Id>
		<SectionContainer id='vision' className='bg-black text-white'>
			{/* Hero title - Apple style */}
			<motion.div
				initial={{ opacity: 0, y: 30 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.8 }}
				className='mb-20 text-center'
			>
				<h2 className='mb-6 font-bold text-5xl leading-tight md:text-6xl lg:text-7xl'>
					WasiSafe y tu seguridad.
					<br />
					Dinamita pura.
				</h2>
				<p className='mx-auto max-w-4xl text-gray-400 text-xl leading-relaxed md:text-2xl'>
					WasiSafe estrena un espectacular diseño y trae mejoras revolucionarias que llevan la
					protección de tu comunidad a un nuevo nivel.{' '}
					<span className='font-semibold text-white'>El nuevo e intuitivo sistema de alertas</span>{' '}
					te brinda más poder y flexibilidad. Usa tecnología de punta, disfruta la mejor seguridad y
					domina la protección de tu hogar con una interfaz tan intuitiva que te va a encantar desde
					el primer toque.
				</p>
			</motion.div>

			{/* Feature grid - Apple style cards */}
			<div className='mb-20 grid gap-6 md:grid-cols-2 lg:grid-cols-4'>
				{[
					{
						icon: <Lightbulb className='h-12 w-12' />,
						title: 'Tecnología de IA avanzada',
						description: 'para detectar amenazas en tiempo real.',
						color: 'blue',
					},
					{
						icon: <Rocket className='h-12 w-12' />,
						title: 'Respuesta hasta',
						highlight: '3 veces más rápida',
						description: 'que sistemas tradicionales de seguridad.',
						color: 'purple',
					},
					{
						icon: <Globe className='h-12 w-12' />,
						title: 'Cobertura en',
						highlight: '20 ciudades',
						description: 'protegiendo miles de hogares.',
						color: 'green',
					},
					{
						icon: <Users className='h-12 w-12' />,
						title: 'Red comunitaria',
						description: 'conectada para máxima protección.',
						color: 'orange',
					},
				].map((item, index) => (
					<motion.div
						key={index}
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: index * 0.1 }}
						className='group rounded-3xl bg-zinc-900 p-8 transition-all duration-300 hover:bg-zinc-800'
					>
						<div className={`mb-6 text-${item.color}-500`}>{item.icon}</div>
						<p className='mb-2 text-lg text-white'>{item.title}</p>
						{item.highlight && (
							<p className={`mb-2 font-semibold text-${item.color}-400 text-2xl`}>
								{item.highlight}
							</p>
						)}
						<p className='text-gray-400 text-sm'>{item.description}</p>
					</motion.div>
				))}
			</div>

			{/* Timeline - Apple style */}
			<motion.div
				initial={{ opacity: 0, y: 30 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				className='rounded-3xl border border-zinc-800 bg-zinc-900 p-8 md:p-12'
			>
				<h3 className='mb-12 text-center font-bold text-3xl md:text-4xl'>Nuestro Recorrido</h3>
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
							<div className='mb-2 font-bold text-4xl text-blue-500'>{milestone.year}</div>
							<div className='mb-1 font-semibold text-lg text-white'>{milestone.title}</div>
							<div className='text-gray-400 text-sm'>{milestone.description}</div>
						</motion.div>
					))}
				</div>
			</motion.div>
		</SectionContainer>
	);
}
