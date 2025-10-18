'use client';

import { motion } from 'framer-motion';
import { Globe, Package, Recycle, Shield, Users, Zap } from 'lucide-react';

interface ValueCard {
	icon: React.ReactNode;
	title: string;
	description: string;
	highlight: string;
	color: string;
	link?: string;
}

const defaultValues: ValueCard[] = [
	{
		icon: <Recycle className='h-12 w-12' />,
		title: 'Fabricado con un',
		highlight: '30% de material reciclado',
		description: 'calculado en peso.',
		color: 'purple',
		link: 'Más información sobre medio ambiente',
	},
	{
		icon: <Zap className='h-12 w-12' />,
		title: 'Fabricado con un',
		highlight: '55% de electricidad renovable.',
		description: '',
		color: 'orange',
		link: 'Más información sobre energía',
	},
	{
		icon: <Package className='h-12 w-12' />,
		title: 'Envíos en empaques fabricados',
		highlight: '100% a base de fibra.',
		description: '',
		color: 'cyan',
		link: 'Más información sobre empaques',
	},
];

interface ValuesSectionProps {
	title?: string;
	subtitle?: string;
	values?: ValueCard[];
}

export function ValuesSection({
	title = 'Nuestros valores reflejan nuestro compromiso.',
	subtitle,
	values = defaultValues,
}: ValuesSectionProps) {
	return (
		<section className='bg-black py-20 text-white'>
			<div className='mx-auto max-w-7xl px-4'>
				{/* Section title */}
				{subtitle && (
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className='mb-4 text-center font-semibold text-gray-400 text-sm uppercase tracking-wider'
					>
						{subtitle}
					</motion.p>
				)}

				<motion.h2
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className='mb-16 text-center font-bold text-4xl md:text-5xl'
				>
					{title}
				</motion.h2>

				{/* Value cards */}
				<div className='grid gap-6 md:grid-cols-3'>
					{values.map((value, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.15 }}
							className='group relative overflow-hidden rounded-3xl bg-zinc-900 p-8 transition-all duration-500 hover:bg-zinc-800'
						>
							{/* Icon with color */}
							<div className={`mb-6 text-${value.color}-500`}>{value.icon}</div>

							{/* Content */}
							<div className='space-y-2'>
								<p className='text-lg text-white'>{value.title}</p>
								<p className={`font-semibold text-${value.color}-400 text-xl`}>{value.highlight}</p>
								{value.description && <p className='text-gray-400'>{value.description}</p>}
							</div>

							{/* Link with plus icon */}
							{value.link && (
								<button
									type='button'
									className='mt-6 flex items-center gap-2 text-blue-400 text-sm transition-colors hover:text-blue-300'
								>
									<span className='flex h-8 w-8 items-center justify-center rounded-full bg-white/10'>
										<span className='text-xl'>+</span>
									</span>
									<span>{value.link}</span>
								</button>
							)}

							{/* Gradient overlay on hover */}
							<div
								className={`-z-10 absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-500 group-hover:opacity-5 from-${value.color}-500 to-transparent`}
							/>
						</motion.div>
					))}
				</div>

				{/* Bottom cards - additional values */}
				<div className='mt-12 grid gap-6 md:grid-cols-3'>
					{[
						{
							icon: <Globe className='h-10 w-10' />,
							title: 'Un plan tan innovador como nuestros productos.',
							description:
								'Como meta para 2030, nos hemos comprometido a reducir las emisiones netas a cero en toda nuestra huella de carbono.',
							link: 'Más información sobre medio ambiente',
						},
						{
							icon: <Shield className='h-10 w-10' />,
							title: 'Privacidad. Esto es WasiSafe.',
							description:
								'La privacidad es un derecho humano fundamental. Todos nuestros productos y servicios están diseñados para proteger tu información.',
							link: 'Más información sobre privacidad',
						},
						{
							icon: <Users className='h-10 w-10' />,
							title: 'Innovación diseñada para ser accesible.',
							description:
								'Nuestros productos y servicios están diseñados para todo el mundo, con funcionalidades integradas que te ayudan a lucir en lo que haces, a tu manera.',
							link: 'Más información sobre accesibilidad',
						},
					].map((item, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: 0.45 + index * 0.15 }}
							className='rounded-3xl border border-zinc-800 bg-zinc-950 p-8 transition-all duration-500 hover:border-zinc-700'
						>
							<div className='mb-4 text-white'>{item.icon}</div>
							<h3 className='mb-3 font-semibold text-xl'>{item.title}</h3>
							<p className='mb-4 text-gray-400 text-sm leading-relaxed'>{item.description}</p>
							<button
								type='button'
								className='text-blue-400 text-sm transition-colors hover:text-blue-300'
							>
								{item.link} ›
							</button>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
