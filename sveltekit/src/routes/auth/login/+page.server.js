import { invalid, redirect } from '@sveltejs/kit';
import { auth } from '$lib/module/auth/store.js';

export const actions = {
    default: async ({ request, cookies }) => {
        // get formData
        const formData = await request.formData();
        const email = formData.get("email");
        const password = formData.get("password");
        // login
        const login = await auth.login(email, password);
        console.log('login', login);
        if(login) {
            // // set cookie
            // let loggedIn = cookies.get('loggedIn') || 0;
            // // set counter
            // let counter = 1;
            // // increment
            // if(loggedIn) 
            //     counter = parseInt(loggedIn) ++;
            // // set cookie
            // cookies.set('loggedIn', toString(counter));

            throw redirect(303, '/admin/people');
        } else 
            return invalid(401, {error: true, message: "Invalid Credentials"});
    }
}