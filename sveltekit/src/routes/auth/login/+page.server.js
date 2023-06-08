import { redirect } from '@sveltejs/kit';
import { APP_URL } from '$env/static/private';

export function load({ locals }) {
    // check if user is logged in
    if (locals.user) {
        throw redirect(307, APP_URL);
    }
}

export const actions = {
    default: async ({ locals, request }) => {
        // get formData
        const formData = await request.formData();
        const email = formData.get("email");
        const password = formData.get("password");
        
        // login
        try {
            await locals.pb.collection('users').authWithPassword(email, password);
        } catch (e) {
            return {error: true, email, message: "Invalid Credentials"};
        }

        throw redirect(303, APP_URL);
    }
}