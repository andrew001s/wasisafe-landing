import {
	Bell,
	Heart,
	Lock,
	MapPin,
	MessageCircle,
	Plane,
	Shield,
	Target,
	TrendingUp,
	Users,
	Video,
	Zap,
} from 'lucide-react';
import type { Benefit, Feature } from '@/types/landing';

export const features: Feature[] = [
	{
		id: 'alerts',
		title: 'Sistema de Alertas Inteligente',
		description:
			'Recibe notificaciones en tiempo real sobre incidentes en tu vecindario. Mantente informado y actúa rápido.',
		icon: Bell,
		color: 'from-red-500 to-orange-500',
	},
	{
		id: 'drones',
		title: 'Vigilancia con Drones',
		description:
			'Tecnología de punta para monitoreo aéreo de zonas amplias. Respuesta rápida ante emergencias.',
		icon: Plane,
		color: 'from-blue-500 to-cyan-500',
	},
	{
		id: 'cameras',
		title: 'Red de Cámaras Conectadas',
		description:
			'Accede a una red de cámaras de seguridad comunitarias. Vigilancia 24/7 en puntos estratégicos.',
		icon: Video,
		color: 'from-purple-500 to-pink-500',
	},
	{
		id: 'chat',
		title: 'Chat Comunitario',
		description:
			'Comunícate con tus vecinos y autoridades en tiempo real. Coordinación efectiva ante cualquier situación.',
		icon: MessageCircle,
		color: 'from-green-500 to-emerald-500',
	},
	{
		id: 'community',
		title: 'Red de Vecinos Activos',
		description:
			'Construye una comunidad fuerte y unida. Juntos somos más fuertes contra la inseguridad.',
		icon: Users,
		color: 'from-yellow-500 to-amber-500',
	},
	{
		id: 'tracking',
		title: 'Geolocalización Precisa',
		description:
			'Reporta y visualiza incidentes con ubicación exacta. Mapas interactivos de tu zona.',
		icon: MapPin,
		color: 'from-indigo-500 to-violet-500',
	},
];

export const benefits: Benefit[] = [
	{
		id: 'security',
		title: 'Mayor Seguridad',
		description:
			'Reduce los índices de criminalidad en tu vecindario con tecnología avanzada y colaboración comunitaria.',
		icon: Shield,
		stat: '85%',
	},
	{
		id: 'response',
		title: 'Respuesta Rápida',
		description:
			'Tiempo de respuesta promedio de 3 minutos ante emergencias reportadas en la plataforma.',
		icon: Zap,
		stat: '3 min',
	},
	{
		id: 'privacy',
		title: 'Privacidad Garantizada',
		description:
			'Tus datos están protegidos con encriptación de nivel bancario. Tu seguridad y privacidad son prioridad.',
		icon: Lock,
		stat: '100%',
	},
	{
		id: 'community',
		title: 'Comunidad Unida',
		description:
			'Fomenta la colaboración entre vecinos. Juntos construimos barrios más seguros y solidarios.',
		icon: Heart,
		stat: '+50K',
	},
	{
		id: 'prevention',
		title: 'Prevención Efectiva',
		description:
			'Identifica patrones y prevén incidentes antes de que ocurran con inteligencia artificial.',
		icon: Target,
		stat: '92%',
	},
	{
		id: 'improvement',
		title: 'Mejora Continua',
		description:
			'Sistema en constante evolución basado en feedback de usuarios y análisis de datos.',
		icon: TrendingUp,
		stat: '24/7',
	},
];
