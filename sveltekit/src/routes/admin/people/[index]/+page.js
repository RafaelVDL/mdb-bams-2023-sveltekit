import { people } from '$lib/module/people/storeAPI.js';

export async function load({ params }) {
    return await people.get(params.index);
}