import { writable } from 'svelte/store';
const {set, update, subscribe} = writable({});

const authStore = () => {
    return {
        subscribe,
        login: () => {
            set({
                loggedIn: true,
                photo: "https://bams.ortadeltech.com/assets/images/profile.png",
                fullname: "Firstname M.I. Lastname",
                profession: "Profession"
            });
        },
        logout: () => {
            set({});
        }
    }
}

export const auth = authStore();