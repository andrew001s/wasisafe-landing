import type { LucideIcon } from 'lucide-react';

export interface Feature {
	id: string;
	title: string;
	description: string;
	icon: LucideIcon;
	color: string;
}

export interface Benefit {
	id: string;
	title: string;
	description: string;
	icon: LucideIcon;
	stat?: string;
}

export interface TeamMember {
	id: string;
	name: string;
	role: string;
	image: string;
	bio?: string;
}

export interface SocialLink {
	name: string;
	href: string;
	icon: LucideIcon;
}

export interface FooterSection {
	title: string;
	links: {
		label: string;
		href: string;
	}[];
}

export interface SubscriptionFormData {
	email: string;
	name?: string;
}

export interface AnimationConfig {
	initial: Record<string, unknown>;
	animate: Record<string, unknown>;
	transition?: Record<string, unknown>;
}
