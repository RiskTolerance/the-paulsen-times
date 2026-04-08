import type { Handle } from '@sveltejs/kit';
import { redirect } from '@sveltejs/kit';
import { SITE_PIN } from '$env/static/private';

const COOKIE_NAME = 'pp_press_pass';
const COOKIE_MAX_AGE = 60 * 60 * 24 * 30; // 30 days

/** Routes that don't require a press pass. */
const PUBLIC_PATHS = new Set(['/unlock']);

function isPublicPath(pathname: string): boolean {
	if (PUBLIC_PATHS.has(pathname)) return true;
	// Allow the favicon and other static assets through (SvelteKit serves them
	// before hooks for prerendered files, but be defensive).
	if (pathname.startsWith('/favicon')) return true;
	if (pathname === '/robots.txt') return true;
	return false;
}

export const handle: Handle = async ({ event, resolve }) => {
	const { pathname } = event.url;

	if (!isPublicPath(pathname)) {
		const pass = event.cookies.get(COOKIE_NAME);
		if (pass !== SITE_PIN) {
			const next = pathname + event.url.search;
			throw redirect(303, `/unlock?next=${encodeURIComponent(next)}`);
		}
	}

	return resolve(event);
};

export { COOKIE_NAME, COOKIE_MAX_AGE };
