'use client';

import { motion } from 'framer-motion';
import { CheckCircle2, Loader2, Mail, Sparkles } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useNewsletter } from '@/hooks/use-newsletter';
import { fadeInUp, scaleIn } from '@/utils/animations';
import { AnimatedSection } from './animated-section';
import { SectionContainer } from './section-container';

export function NewsletterSection() {
	const [email, setEmail] = useState('');
	const [name, setName] = useState('');
	const { isLoading, isSuccess, error, subscribe, reset } = useNewsletter();

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		if (!email) return;

		await subscribe({ email, name });
		if (!error) {
			setEmail('');
			setName('');
		}
	};

	return (
		// biome-ignore lint/correctness/useUniqueElementIds: <Navigation Id>
		<SectionContainer
			id='newsletter'
			className='relative overflow-hidden bg-gradient-to-br from-primary/10 via-blue-500/10 to-purple-500/10'
		>
			{/* Animated background */}
			<motion.div
				animate={{
					scale: [1, 1.2, 1],
					opacity: [0.3, 0.5, 0.3],
				}}
				transition={{
					duration: 8,
					repeat: Number.POSITIVE_INFINITY,
					ease: 'easeInOut',
				}}
				className='absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-transparent blur-3xl'
			/>

			<div className='relative z-10'>
				<AnimatedSection>
					<motion.div variants={fadeInUp} className='mx-auto max-w-3xl text-center'>
						<div className='mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2'>
							<Sparkles className='h-4 w-4 text-primary' />
							<span className='font-semibold text-primary text-sm'>Próximamente</span>
						</div>

						<h2 className='mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text font-bold text-4xl text-transparent sm:text-5xl'>
							Sé Parte de la Revolución
						</h2>

						<p className='mx-auto mb-8 max-w-2xl text-lg text-muted-foreground'>
							Regístrate ahora y sé de los primeros en experimentar el futuro de la seguridad
							ciudadana. Te notificaremos cuando estemos listos para proteger tu comunidad.
						</p>

						{isSuccess ? (
							<motion.div
								variants={scaleIn}
								initial='initial'
								animate='animate'
								className='mx-auto max-w-md rounded-xl border border-green-500/50 bg-green-500/10 p-8'
							>
								<CheckCircle2 className='mx-auto mb-4 h-16 w-16 text-green-500' />
								<h3 className='mb-2 font-bold text-2xl text-green-500'>¡Bienvenido a WasiSafe!</h3>
								<p className='mb-4 text-muted-foreground'>
									Te hemos enviado un correo de confirmación. Pronto recibirás noticias sobre
									nuestro lanzamiento.
								</p>
								<Button
									variant='outline'
									onClick={reset}
									className='border-green-500/50 hover:bg-green-500/10'
								>
									Registrar otro correo
								</Button>
							</motion.div>
						) : (
							<form
								onSubmit={handleSubmit}
								className='mx-auto max-w-md rounded-xl border border-border bg-card p-8 shadow-xl'
							>
								<div className='space-y-4'>
									<div className='text-left'>
										<Label htmlFor='name'>Nombre (opcional)</Label>
										<Input
											type='text'
											placeholder='Tu nombre'
											value={name}
											onChange={(e) => setName(e.target.value)}
											className='mt-1'
											disabled={isLoading}
										/>
									</div>

									<div className='text-left'>
										<Label htmlFor='email'>Correo electrónico *</Label>
										<div className='relative mt-1'>
											<Mail className='-translate-y-1/2 absolute top-1/2 left-3 h-5 w-5 text-muted-foreground' />
											<Input
												type='email'
												placeholder='tu@email.com'
												value={email}
												onChange={(e) => setEmail(e.target.value)}
												className='pl-10'
												required
												disabled={isLoading}
											/>
										</div>
									</div>

									{error && (
										<div className='rounded-lg border border-destructive/50 bg-destructive/10 p-3 text-destructive text-sm'>
											{error}
										</div>
									)}

									<Button type='submit' className='w-full' size='lg' disabled={isLoading || !email}>
										{isLoading ? (
											<>
												<Loader2 className='mr-2 h-5 w-5 animate-spin' />
												Registrando...
											</>
										) : (
											<>
												<Mail className='mr-2 h-5 w-5' />
												Mantenerme informado
											</>
										)}
									</Button>
								</div>

								<p className='mt-4 text-muted-foreground text-xs'>
									Al suscribirte, aceptas recibir actualizaciones sobre WasiSafe. Puedes cancelar en
									cualquier momento.
								</p>
							</form>
						)}

						{/* Benefits */}
						<div className='mx-auto mt-12 grid max-w-2xl gap-6 sm:grid-cols-3'>
							{[
								{
									label: 'Acceso anticipado',
									description: 'Sé de los primeros en usar WasiSafe',
								},
								{
									label: 'Descuentos exclusivos',
									description: 'Ofertas especiales para early adopters',
								},
								{
									label: 'Noticias prioritarias',
									description: 'Mantente al día con todas las novedades',
								},
							].map((benefit) => (
								<div key={benefit.label} className='text-center'>
									<div className='mb-1 font-semibold text-sm'>{benefit.label}</div>
									<div className='text-muted-foreground text-xs'>{benefit.description}</div>
								</div>
							))}
						</div>
					</motion.div>
				</AnimatedSection>
			</div>
		</SectionContainer>
	);
}
