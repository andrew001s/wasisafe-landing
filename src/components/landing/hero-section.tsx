'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export function HeroSection() {
	const scrollToNewsletter = () => {
		document.getElementById('newsletter')?.scrollIntoView({ behavior: 'smooth' });
	};

	return (
		<section className='relative flex min-h-screen items-center justify-center overflow-hidden bg-background dark:bg-black'>
			{/* Background Video/Image Effect */}
			<div className='absolute inset-0 z-0'>
				<div className='absolute inset-0 z-10 bg-gradient-to-b from-background/80 via-background/60 to-background dark:from-black/60 dark:via-black/40 dark:to-black/80' />
				{/* Grid pattern for dark mode, gradient blobs for light mode */}
				<div className='h-full w-full bg-gradient-to-br from-background via-primary/5 to-background dark:from-slate-900 dark:via-blue-900 dark:to-slate-900'>
					<div className='absolute inset-0 bg-[url("/grid-pattern.svg")] opacity-0 dark:opacity-10' />
					{/* Light mode animated blobs */}
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
						className='-right-1/2 -top-1/2 absolute h-full w-full rounded-full bg-gradient-to-br from-primary/10 to-transparent blur-3xl dark:opacity-30'
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
						className='-bottom-1/2 -left-1/2 absolute h-full w-full rounded-full bg-gradient-to-tr from-blue-500/10 to-transparent blur-3xl dark:opacity-30'
					/>
				</div>
			</div>

			{/* Content */}
			<div className='relative z-20 mx-auto max-w-5xl px-4 text-center'>
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
				>
					{/* Main heading */}
					<h1 className='mb-6 font-bold text-5xl text-foreground leading-tight tracking-tight md:text-7xl lg:text-8xl dark:text-white'>
						WasiSafe
					</h1>
					<p className='mb-6 font-semibold text-2xl text-foreground/90 md:text-3xl lg:text-4xl dark:text-white/90'>
						La seguridad ciudadana está evolucionando
					</p>
					<p className='mb-8 text-lg text-muted-foreground md:text-xl dark:text-gray-300'>
						Únete a la revolución de la seguridad comunitaria. Tecnología avanzada, drones
						inteligentes, alertas en tiempo real y una comunidad unida para proteger lo que más
						importa.
					</p>
				</motion.div>

				{/* CTA Buttons */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.3 }}
					className='flex flex-col items-center justify-center gap-4 sm:flex-row'
				>
					<Button
						size='lg'
						className='group bg-primary px-8 py-6 text-lg text-primary-foreground hover:bg-primary/90 dark:bg-white dark:text-black dark:hover:bg-gray-200'
						onClick={scrollToNewsletter}
					>
						Descubre lo que puedes hacer
					</Button>
				</motion.div>

				{/* Stats */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.6 }}
					className='mx-auto mt-20 grid max-w-4xl grid-cols-2 gap-8 md:grid-cols-4'
				>
					{[
						{ value: '50K+', label: 'Usuarios activos' },
						{ value: '85%', label: 'Reducción criminalidad' },
						{ value: '3 min', label: 'Tiempo respuesta' },
						{ value: '24/7', label: 'Monitoreo continuo' },
					].map((stat) => (
						<div key={stat.label} className='text-center'>
							<div className='mb-2 font-bold text-3xl text-primary sm:text-4xl dark:text-blue-500'>
								{stat.value}
							</div>
							<div className='text-muted-foreground text-sm dark:text-gray-400'>{stat.label}</div>
						</div>
					))}
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
				className='-translate-x-1/2 absolute bottom-8 left-1/2'
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
