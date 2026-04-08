import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';
import { SITE_PIN } from '$env/static/private';
import { COOKIE_NAME, COOKIE_MAX_AGE } from '../../hooks.server';

export const actions: Actions = {
	default: async ({ request, cookies, url }) => {
		const data = await request.formData();
		const pin = String(data.get('pin') ?? '').trim();

		if (pin !== SITE_PIN) {
			return fail(401, { error: 'Invalid press pass. Try again.' });
		}

		cookies.set(COOKIE_NAME, pin, {
			path: '/',
			httpOnly: true,
			sameSite: 'lax',
			secure: url.protocol === 'https:',
			maxAge: COOKIE_MAX_AGE
		});

		const next = url.searchParams.get('next') || '/';
		// Only allow internal redirects.
		const safeNext = next.startsWith('/') && !next.startsWith('//') ? next : '/';
		throw redirect(303, safeNext);
	}
};
