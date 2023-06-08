import { pb } from '$lib/module/auth/storePB.js';

export const handle = async ({event, resolve }) => {
    // check cookie
    pb.authStore.loadFromCookie(event.request.headers.get('cookie') || '');
    if(pb.authStore.isValid) {
        try {
            await pb.collection('users').authRefresh();
        } catch (e) {
            pb.authStore.clear();
        }
    }

    // set locals
    event.locals.pb = pb;
    event.locals.user = structuredClone(pb.authStore.model);

    // resolve
    const response = await resolve(event);

    // set cookie
    response.headers.set('set-cookie', pb.authStore.exportToCookie({ httpOnly: false }));

    // continue
    return response;
}