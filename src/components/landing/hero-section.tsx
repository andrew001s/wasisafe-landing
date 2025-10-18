'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { fadeInLeft, fadeInUp, staggerContainer } from '@/utils/animations';

// biome-ignore lint/complexity/noExcessiveLinesPerFunction: <Animation Component>
export function HeroSection() {
	const scrollToNewsletter = () => {
		document.getElementById('newsletter')?.scrollIntoView({ behavior: 'smooth' });
	};

	return (
		<section className='relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-primary/5'>
			{/* Animated background elements */}
			<div className='absolute inset-0 overflow-hidden'>
				<motion.div
					animate={{
						scale: [1, 1.2, 1],
						rotate: [0, 90, 0],
					}}
					transition={{
						duration: 20,
						repeat: Number.POSITIVE_INFINITY,
						ease: 'linear',
					}}
					className='-top-1/2 -right-1/2 absolute h-full w-full rounded-full bg-gradient-to-br from-primary/10 to-transparent blur-3xl'
				/>
				<motion.div
					animate={{
						scale: [1.2, 1, 1.2],
						rotate: [90, 0, 90],
					}}
					transition={{
						duration: 15,
						repeat: Number.POSITIVE_INFINITY,
						ease: 'linear',
					}}
					className='-bottom-1/2 -left-1/2 absolute h-full w-full rounded-full bg-gradient-to-tr from-blue-500/10 to-transparent blur-3xl'
				/>
			</div>

			<div className='relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8'>
				<motion.div
					variants={staggerContainer}
					initial='initial'
					animate='animate'
					className='text-center'
				>
					{/* Logo/Icon */}
					<motion.div variants={fadeInUp} className='mb-6 flex justify-center'>
						<div className='relative'>
							<motion.div
								animate={{
									boxShadow: [
										'0 0 20px rgba(59, 130, 246, 0.5)',
										'0 0 60px rgba(59, 130, 246, 0.3)',
										'0 0 20px rgba(59, 130, 246, 0.5)',
									],
								}}
								transition={{
									duration: 2,
									repeat: Number.POSITIVE_INFINITY,
									ease: 'easeInOut',
								}}
								className='flex h-24 w-24 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500'
							>
								<Shield className='h-12 w-12 text-white' />
							</motion.div>
						</div>
					</motion.div>

					{/* Main heading */}
					<motion.h1
						variants={fadeInUp}
						className='mb-6 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text font-bold text-5xl text-transparent sm:text-6xl lg:text-7xl'
					>
						WasiSafe
					</motion.h1>

					{/* Subtitle */}
					<motion.p
						variants={fadeInUp}
						className='mb-6 font-semibold text-2xl text-foreground/90 sm:text-3xl lg:text-4xl'
					>
						La seguridad ciudadana está evolucionando
					</motion.p>

					{/* Description */}
					<motion.p
						variants={fadeInUp}
						className='mx-auto mb-10 max-w-3xl text-lg text-muted-foreground sm:text-xl'
					>
						Únete a la revolución de la seguridad comunitaria. Tecnología avanzada, drones
						inteligentes, alertas en tiempo real y una comunidad unida para proteger lo que más
						importa.
					</motion.p>

					{/* CTA Buttons */}
					<motion.div
						variants={fadeInLeft}
						className='flex flex-col items-center justify-center gap-4 sm:flex-row'
					>
						<Button size='lg' className='group px-8 py-6 text-lg' onClick={scrollToNewsletter}>
							Únete a la comunidad
							<ArrowRight className='ml-2 h-5 w-5 transition-transform group-hover:translate-x-1' />
						</Button>
						<Button
							size='lg'
							variant='outline'
							className='px-8 py-6 text-lg'
							onClick={() =>
								document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })
							}
						>
							Conocer más
						</Button>
					</motion.div>

					{/* Stats */}
					<motion.div
						variants={fadeInUp}
						className='mx-auto mt-20 grid max-w-4xl grid-cols-2 gap-8 md:grid-cols-4'
					>
						{[
							{ value: '50K+', label: 'Usuarios activos' },
							{ value: '85%', label: 'Reducción criminalidad' },
							{ value: '3 min', label: 'Tiempo respuesta' },
							{ value: '24/7', label: 'Monitoreo continuo' },
						].map((stat) => (
							<div key={stat.label} className='text-center'>
								<div className='mb-2 font-bold text-3xl text-primary sm:text-4xl'>{stat.value}</div>
								<div className='text-muted-foreground text-sm'>{stat.label}</div>
							</div>
						))}
					</motion.div>
				</motion.div>
			</div>

			{/* Scroll indicator */}
			<motion.div
				animate={{ y: [0, 10, 0] }}
				transition={{
					duration: 1.5,
					repeat: Number.POSITIVE_INFINITY,
					ease: 'easeInOut',
				}}
				className='-translate-x-1/2 absolute bottom-8 left-1/2 transform'
			>
				<div className='flex h-10 w-6 justify-center rounded-full border-2 border-primary'>
					<motion.div
						animate={{ y: [0, 12, 0] }}
						transition={{
							duration: 1.5,
							repeat: Number.POSITIVE_INFINITY,
							ease: 'easeInOut',
						}}
						className='mt-2 h-1.5 w-1.5 rounded-full bg-primary'
					/>
				</div>
			</motion.div>
		</section>
	);
}
