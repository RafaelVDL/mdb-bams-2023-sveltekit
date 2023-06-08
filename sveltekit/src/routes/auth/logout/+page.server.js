import { redirect } from '@sveltejs/kit';
import { BASE_URL } from '$env/static/private';

export function load({ locals }) {
    locals.pb.authStore.clear();
    locals.user = null;
    throw redirect(307, BASE_URL);
}