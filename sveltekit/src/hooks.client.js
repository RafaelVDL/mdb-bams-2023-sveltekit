import { auth, pb } from '$lib/module/auth/storePB.js';

// check cookie change
pb.authStore.onChange(() => {
    auth.set(pb.authStore.model);
    document.cookie = pb.authStore.exportToCookie({ httpOnly: false });
});

// update cookie
pb.authStore.loadFromCookie(document.cookie);