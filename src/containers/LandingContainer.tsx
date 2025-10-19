import {
	BenefitsSection,
	FeaturesSection,
	Footer,
	HeroSection,
	NewsletterSection,
	VisionSection,
} from '@/components/landing';
import { MediaContentSection } from '@/components/landing/media-content-section';

export const LandingContainer = () => {
	return (
		<div className='min-h-screen'>
			<HeroSection />

			{/* Media Content Section - Technology */}
			<MediaContentSection
				subtitle='TECNOLOGÍA AVANZADA'
				title='IA de última generación. Para proteger en modo supersónico.'
				description='WasiSafe utiliza inteligencia artificial avanzada para detectar amenazas en tiempo real. Nuestro sistema de procesamiento de última generación analiza patrones de comportamiento, reconoce situaciones de riesgo y coordina respuestas automáticas. Además, la integración con drones y cámaras inteligentes ofrece una cobertura revolucionaria para tu comunidad.'
				mediaUrl='/placeholder-ai-tech.jpg'
				imagePosition='right'
				darkMode={true}
				accentColor='blue'
			/>

			<FeaturesSection />

			{/* Media Content Section - Community */}
			<MediaContentSection
				subtitle='RED COMUNITARIA'
				title='WasiSafe y tu comunidad. Dinamita pura.'
				description='Conecta con tus vecinos a través de nuestra red comunitaria inteligente. Comparte alertas, coordina patrullajes y crea una comunidad más segura juntos. El nuevo sistema de comunicación te brinda más poder y flexibilidad para mantener tu vecindario protegido las 24 horas del día.'
				mediaUrl='/placeholder-community.jpg'
				imagePosition='left'
				darkMode={true}
				accentColor='purple'
			/>

			<BenefitsSection />
			<VisionSection />

			{/* Media Content Section - Monitoring */}
			<MediaContentSection
				subtitle='MONITOREO CONTINUO'
				title='Captura y monitorea con calidad profesional 4K.'
				description='Nuestras cámaras de última generación graban en 4K con visión nocturna avanzada. Monitorea tu comunidad en tiempo real y ejecuta análisis de IA más complejos, todo con tecnología profesional de seguridad avanzada.'
				mediaUrl='/placeholder-cameras.jpg'
				imagePosition='right'
				darkMode={true}
				accentColor='cyan'
			/>

			<NewsletterSection />
			<Footer />
		</div>
	);
};
