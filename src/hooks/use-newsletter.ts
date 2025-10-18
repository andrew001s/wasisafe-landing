'use client';

import { useState } from 'react';
import type { SubscriptionFormData } from '@/types/landing';

interface UseNewsletterReturn {
	isLoading: boolean;
	isSuccess: boolean;
	error: string | null;
	subscribe: (data: SubscriptionFormData) => Promise<void>;
	reset: () => void;
}

export function useNewsletter(): UseNewsletterReturn {
	const [isLoading, setIsLoading] = useState(false);
	const [isSuccess, setIsSuccess] = useState(false);
	const [error, setError] = useState<string | null>(null);

	const subscribe = async (data: SubscriptionFormData) => {
		setIsLoading(true);
		setError(null);

		try {
			// Simulación de envío - Aquí se integraría con Mailchimp, Formspree, etc.
			await new Promise((resolve) => setTimeout(resolve, 1500));

			// Por ahora solo guardamos en localStorage como demo
			const subscribers = JSON.parse(localStorage.getItem('WasiSafe-subscribers') || '[]');
			subscribers.push({ ...data, subscribedAt: new Date().toISOString() });
			localStorage.setItem('WasiSafe-subscribers', JSON.stringify(subscribers));

			setIsSuccess(true);
		} catch (err) {
			setError(err instanceof Error ? err.message : 'Error al procesar la suscripción');
		} finally {
			setIsLoading(false);
		}
	};

	const reset = () => {
		setIsSuccess(false);
		setError(null);
	};

	return { isLoading, isSuccess, error, subscribe, reset };
}
