import {
	BenefitsSection,
	FeaturesSection,
	Footer,
	HeroSection,
	NewsletterSection,
	StorySection,
	VisionSection,
} from '@/components/landing';

export default function Home() {
	return (
		<div className='min-h-screen'>
			<HeroSection />
			<StorySection />
			<FeaturesSection />
			<BenefitsSection />
			<VisionSection />
			<NewsletterSection />
			<Footer />
		</div>
	);
}
