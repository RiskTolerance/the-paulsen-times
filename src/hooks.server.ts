import type { Handle } from '@sveltejs/kit';
import { redirect } from '@sveltejs/kit';
import { SITE_PIN } from '$env/static/private';

const COOKIE_NAME = 'pp_press_pass';
const COOKIE_MAX_AGE = 60 * 60 * 24 * 30; // 30 days

/** Routes that don't require a press pass. */
const PUBLIC_PATHS = new Set(['/unlock']);

/**
 * User-agent substrings for link-unfurling bots that should bypass the PIN
 * gate so chat apps can fetch Open Graph previews. Match is case-insensitive.
 * Note: UA is spoofable — this is by design, we only care about casual
 * discovery, not determined adversaries.
 */
const UNFURL_BOTS = [
	'slackbot',
	'discordbot',
	'twitterbot',
	'facebookexternalhit',
	'facebookcatalog',
	'linkedinbot',
	'telegrambot',
	'whatsapp',
	'skypeuripreview',
	'redditbot',
	'iframely',
	'embedly',
	'pinterest',
	'applebot',
	'googlebot' // so the og tags still make sense if someone tests with it; noindex still applies
];

function isPublicPath(pathname: string): boolean {
	if (PUBLIC_PATHS.has(pathname)) return true;
	// Allow the favicon and other static assets through (SvelteKit serves them
	// before hooks for prerendered files, but be defensive).
	if (pathname.startsWith('/favicon')) return true;
	if (pathname === '/robots.txt') return true;
	return false;
}

function isUnfurlBot(userAgent: string | null): boolean {
	if (!userAgent) return false;
	const ua = userAgent.toLowerCase();
	return UNFURL_BOTS.some((bot) => ua.includes(bot));
}

export const handle: Handle = async ({ event, resolve }) => {
	const { pathname } = event.url;

	if (!isPublicPath(pathname)) {
		const pass = event.cookies.get(COOKIE_NAME);
		const authed = pass === SITE_PIN;
		const bot = isUnfurlBot(event.request.headers.get('user-agent'));

		if (!authed && !bot) {
			const next = pathname + event.url.search;
			throw redirect(303, `/unlock?next=${encodeURIComponent(next)}`);
		}
	}

	return resolve(event);
};

export { COOKIE_NAME, COOKIE_MAX_AGE };
