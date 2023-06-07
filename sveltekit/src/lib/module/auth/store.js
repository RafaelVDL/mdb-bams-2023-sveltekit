import { writable } from 'svelte/store';
const accounts = [
    {
        loggedIn: false,
        photo: "https://bams.ortadeltech.com/assets/images/profile.png",
        fullname: "Super Admin",
        role: "Super Admin",
        email: "super@admin.com",
        password: "superadmin123"
    },
];

const store = writable({});
const {set, update, subscribe} = store;

const authStore = () => {
    return {
        subscribe,
        // login: () => {
        //     set({
        //         loggedIn: true,
        //         photo: "https://bams.ortadeltech.com/assets/images/profile.png",
        //         fullname: "Firstname M.I. Lastname",
        //         profession: "Profession"
        //     });
        // },
        login: (email, password) => {
            const user = accounts.find(account => {
                return (account.email == email && account.password == password);
            });

            if(user) {
                user.loggedIn = true;
                set(user);
                
                return true;
            } else 
                return false;
        },
        logout: () => {
            set({});
        }
    }
}

export const auth = authStore();