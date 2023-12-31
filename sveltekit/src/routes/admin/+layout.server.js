import { redirect } from '@sveltejs/kit';
import { BASE_URL } from '$env/static/private';

export function load({ locals }) {
    if (!locals.user) {
        throw redirect(307, BASE_URL);
    }
}