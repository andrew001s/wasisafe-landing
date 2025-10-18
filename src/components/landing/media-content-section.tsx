'use client';

import { motion } from 'framer-motion';

interface MediaContentSectionProps {
	title: string;
	subtitle?: string;
	description: string;
	mediaUrl: string;
	mediaType?: 'image' | 'video';
	imagePosition?: 'left' | 'right';
	darkMode?: boolean;
	accentColor?: string;
}

export function MediaContentSection({
	title,
	subtitle,
	description,
	mediaUrl,
	mediaType = 'image',
	imagePosition = 'right',
	darkMode = true,
	accentColor = 'blue',
}: MediaContentSectionProps) {
	const bgColor = darkMode ? 'bg-black' : 'bg-white';
	const textColor = darkMode ? 'text-white' : 'text-black';
	const subtitleColor = darkMode ? 'text-gray-400' : 'text-gray-600';

	return (
		<section className={`${bgColor} ${textColor} py-20`}>
			<div className='mx-auto max-w-7xl px-4'>
				<div
					className={`grid items-center gap-12 lg:grid-cols-2 ${
						imagePosition === 'left' ? 'lg:grid-flow-dense' : ''
					}`}
				>
					{/* Text content */}
					<motion.div
						initial={{ opacity: 0, x: imagePosition === 'left' ? 50 : -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8 }}
						className={imagePosition === 'left' ? 'lg:col-start-2' : ''}
					>
						{subtitle && (
							<p
								className={`mb-4 font-semibold text-${accentColor}-500 text-sm uppercase tracking-wider`}
							>
								{subtitle}
							</p>
						)}
						<h2 className='mb-6 font-bold text-4xl leading-tight md:text-5xl lg:text-6xl'>
							{title}
						</h2>
						<p className={`${subtitleColor} text-lg leading-relaxed md:text-xl`}>{description}</p>
					</motion.div>

					{/* Media content */}
					<motion.div
						initial={{ opacity: 0, x: imagePosition === 'left' ? -50 : 50 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8 }}
						className={`relative ${imagePosition === 'left' ? 'lg:col-start-1 lg:row-start-1' : ''}`}
					>
						<div className='relative aspect-video overflow-hidden rounded-3xl shadow-2xl'>
							{mediaType === 'video' ? (
								<video autoPlay muted loop playsInline className='h-full w-full object-cover'>
									<source src={mediaUrl} type='video/mp4' />
								</video>
							) : (
								<div className='relative h-full w-full bg-gradient-to-br from-slate-800 to-slate-900'>
									{/* Placeholder - replace with actual Image component when you have real images */}
									<div className='flex h-full items-center justify-center text-gray-500'>
										<span>Imagen: {mediaUrl}</span>
									</div>
									{/*
									<Image
										src={mediaUrl}
										alt={title}
										fill
										className="object-cover"
									/>
									*/}
								</div>
							)}
						</div>

						{/* Decorative gradient blob */}
						<div
							className={`-bottom-10 -right-10 -z-10 absolute h-64 w-64 rounded-full bg-${accentColor}-500 opacity-20 blur-3xl`}
						/>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
