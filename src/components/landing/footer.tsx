import { Facebook, Github, Instagram, Linkedin, Mail, Shield, Twitter } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { SITE_CONFIG, SOCIAL_LINKS } from '@/utils/constants';

export function Footer() {
	const currentYear = new Date().getFullYear();

	const footerSections = [
		{
			title: 'Producto',
			links: [
				{ label: 'Características', href: '#features' },
				{ label: 'Beneficios', href: '#benefits' },
				{ label: 'Casos de Uso', href: '#story' },
				{ label: 'Precios', href: '#newsletter' },
			],
		},
		{
			title: 'Compañía',
			links: [
				{ label: 'Sobre Nosotros', href: '#vision' },
				{ label: 'Blog', href: '#' },
				{ label: 'Carreras', href: '#' },
				{ label: 'Prensa', href: '#' },
			],
		},
		{
			title: 'Recursos',
			links: [
				{ label: 'Documentación', href: '#' },
				{ label: 'Ayuda', href: '#' },
				{ label: 'Comunidad', href: '#' },
				{ label: 'Estado', href: '#' },
			],
		},
		{
			title: 'Legal',
			links: [
				{ label: 'Privacidad', href: '#' },
				{ label: 'Términos', href: '#' },
				{ label: 'Cookies', href: '#' },
				{ label: 'Licencias', href: '#' },
			],
		},
	];

	const socialLinks = [
		{ icon: Facebook, href: SOCIAL_LINKS.facebook, label: 'Facebook' },
		{ icon: Twitter, href: SOCIAL_LINKS.twitter, label: 'Twitter' },
		{ icon: Instagram, href: SOCIAL_LINKS.instagram, label: 'Instagram' },
		{ icon: Linkedin, href: SOCIAL_LINKS.linkedin, label: 'LinkedIn' },
		{ icon: Github, href: SOCIAL_LINKS.github, label: 'GitHub' },
	];

	return (
		<footer className='border-border border-t bg-muted/50'>
			<div className='mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8'>
				{/* Main Footer Content */}
				<div className='mb-8 grid grid-cols-2 gap-8 md:grid-cols-6'>
					{/* Brand Column */}
					<div className='col-span-2'>
						<div className='mb-4 flex items-center gap-2'>
							<div className='flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500'>
								<Shield className='h-6 w-6 text-white' />
							</div>
							<span className='font-bold text-xl'>{SITE_CONFIG.name}</span>
						</div>
						<p className='mb-4 max-w-xs text-muted-foreground text-sm'>
							Revolucionando la seguridad ciudadana con tecnología avanzada y colaboración
							comunitaria.
						</p>
						<div className='flex items-center gap-2 text-muted-foreground text-sm'>
							<Mail className='h-4 w-4' />
							<a
								href={`mailto:${SITE_CONFIG.email}`}
								className='transition-colors hover:text-primary'
							>
								{SITE_CONFIG.email}
							</a>
						</div>
					</div>

					{/* Links Columns */}
					{footerSections.map((section) => (
						<div key={section.title}>
							<h3 className='mb-4 font-semibold text-sm uppercase tracking-wider'>
								{section.title}
							</h3>
							<ul className='space-y-2'>
								{section.links.map((link) => (
									<li key={link.label}>
										<a
											href={link.href}
											className='text-muted-foreground text-sm transition-colors hover:text-primary'
										>
											{link.label}
										</a>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>

				<Separator className='mb-8' />

				{/* Bottom Footer */}
				<div className='flex flex-col items-center justify-between gap-4 sm:flex-row'>
					<div className='text-muted-foreground text-sm'>
						© {currentYear} {SITE_CONFIG.name}. Todos los derechos reservados.
					</div>

					{/* Social Links */}
					<div className='flex items-center gap-4'>
						{socialLinks.map((social) => {
							const Icon = social.icon;
							return (
								<a
									key={social.label}
									href={social.href}
									target='_blank'
									rel='noopener noreferrer'
									className='group flex h-9 w-9 items-center justify-center rounded-full bg-muted transition-colors hover:bg-primary/10'
									aria-label={social.label}
								>
									<Icon className='h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary' />
								</a>
							);
						})}
					</div>
				</div>

				{/* Inspirational Message */}
				<div className='mt-8 border-border border-t pt-8 text-center'>
					<p className='text-muted-foreground text-sm italic'>
						"Juntos construimos comunidades más seguras y solidarias"
					</p>
				</div>
			</div>
		</footer>
	);
}
