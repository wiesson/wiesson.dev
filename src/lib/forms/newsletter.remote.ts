import { form } from '$app/server';
import { z } from 'zod';

export const subscribeNewsletter = form(
	z.object({
		email: z.string().email('Please enter a valid email address'),
	}),
	async ({ email }) => {
		// TODO: Send email to arne@tourvy.com
		// For now, just log it (we can add email service later)
		console.log('[Newsletter] New subscription:', email);

		// Send to arne@tourvy.com (implement with email service)
		// await sendEmail({
		//   to: 'arne@tourvy.com',
		//   subject: 'New Newsletter Subscription',
		//   text: `New subscriber: ${email}`
		// });

		return {
			success: true,
			message: 'Successfully subscribed to our newsletter!',
		};
	},
);
