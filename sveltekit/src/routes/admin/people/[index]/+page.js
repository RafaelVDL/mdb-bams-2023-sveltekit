import { get } from 'svelte/store';
import { people } from '$lib/module/people/store.js';

export async function load({ params }) {
    const data = await get(people);
    return data ? data[params.index] : {};
}