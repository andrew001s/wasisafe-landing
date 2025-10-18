import type { Variant } from 'framer-motion';

export const fadeInUp: Record<string, Variant> = {
	initial: {
		opacity: 0,
		y: 60,
	},
	animate: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.6,
			ease: 'easeOut',
		},
	},
};

export const fadeInLeft: Record<string, Variant> = {
	initial: {
		opacity: 0,
		x: -60,
	},
	animate: {
		opacity: 1,
		x: 0,
		transition: {
			duration: 0.6,
			ease: 'easeOut',
		},
	},
};

export const fadeInRight: Record<string, Variant> = {
	initial: {
		opacity: 0,
		x: 60,
	},
	animate: {
		opacity: 1,
		x: 0,
		transition: {
			duration: 0.6,
			ease: 'easeOut',
		},
	},
};

export const fadeIn: Record<string, Variant> = {
	initial: {
		opacity: 0,
	},
	animate: {
		opacity: 1,
		transition: {
			duration: 0.6,
		},
	},
};

export const scaleIn: Record<string, Variant> = {
	initial: {
		opacity: 0,
		scale: 0.8,
	},
	animate: {
		opacity: 1,
		scale: 1,
		transition: {
			duration: 0.5,
			ease: 'easeOut',
		},
	},
};

export const staggerContainer = {
	animate: {
		transition: {
			staggerChildren: 0.1,
		},
	},
};

export const slideInFromBottom: Record<string, Variant> = {
	initial: {
		y: 100,
		opacity: 0,
	},
	animate: {
		y: 0,
		opacity: 1,
		transition: {
			type: 'spring',
			stiffness: 100,
			damping: 15,
		},
	},
};
