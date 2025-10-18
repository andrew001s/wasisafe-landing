'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function MultimediaHero() {
	return (
		<section className='relative flex min-h-screen items-center justify-center overflow-hidden bg-black text-white'>
			{/* Background Video/Image */}
			<div className='absolute inset-0 z-0'>
				<div className='absolute inset-0 z-10 bg-gradient-to-b from-black/60 via-black/40 to-black/80' />
				{/* Placeholder for video - replace with actual video */}
				<div className='h-full w-full bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900'>
					{/* You can replace this with:
						<video autoPlay muted loop playsInline className="h-full w-full object-cover">
							<source src="/path-to-video.mp4" type="video/mp4" />
						</video>
					*/}
					<div className='absolute inset-0 bg-[url("/grid-pattern.svg")] opacity-10' />
				</div>
			</div>

			{/* Content */}
			<div className='relative z-20 mx-auto max-w-5xl px-4 text-center'>
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
				>
					<h1 className='mb-6 font-bold text-5xl tracking-tight md:text-7xl lg:text-8xl'>
						Mira lo más destacado.
					</h1>
					<p className='mb-8 text-2xl text-gray-300 md:text-3xl'>
						WasiSafe. Un rediseño revolucionario.
						<br />
						Poder que lo cambia todo.
					</p>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.3 }}
					className='flex flex-col items-center justify-center gap-4 sm:flex-row'
				>
					<Button size='lg' className='bg-white px-8 text-black hover:bg-gray-200'>
						Descubre lo que puedes hacer
					</Button>
				</motion.div>

				{/* Scroll indicator */}
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.8, delay: 0.6 }}
					className='-translate-x-1/2 absolute bottom-12 left-1/2'
				>
					<motion.div
						animate={{ y: [0, 10, 0] }}
						transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
					>
						<ChevronDown className='h-8 w-8 text-white/60' />
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
}
