import { PUBLIC_DATABASE_URL } from "$env/static/public";
import { writable } from 'svelte/store';
import PocketBase from 'pocketbase';

export const pb = new PocketBase(PUBLIC_DATABASE_URL);

export const auth = writable(pb.authStore.model);