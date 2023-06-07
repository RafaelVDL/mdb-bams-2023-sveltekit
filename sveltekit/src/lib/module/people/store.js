import { get } from 'svelte/store';
import { writable } from "svelte/store";
const store = writable([]);
const {set, update, subscribe} = store;

const getFullname = (firstname, middlename, lastname) => {
    return `${firstname} ${middlename[0]}. ${lastname}`;
};
const getAge = (birthdate) => {
    return new Number((new Date().getTime() - new Date(birthdate).getTime()) / 31536000000).toFixed(0);
};

const peopleStore = () => {
    return {
        subscribe,
        get: async (index) => {
            const data = await get(store);
            return data ? data[index] : {};
        },
        add: (data) => {
            if(data instanceof FormData) data = Object.fromEntries(data.entries());
            data.fullname = getFullname(data.firstname, data.middlename, data.lastname);
            data.age = getAge(data.birthdate);
            update(val => val ? [...val, data] : [data]);
            return true;
        },
        update: (index, data) => {
            if(data instanceof FormData) data = Object.fromEntries(data.entries());
            data.fullname = getFullname(data.firstname, data.middlename, data.lastname);
            data.age = getAge(data.birthdate);
            update(val => val.map(function(value, idx, arr){ 
                if (idx != index) return value;
                else return data;
            }));
            return true;
        },
        delete: (index) => {
            console.log('delete', index);
            update(val => val.filter(function(value, idx, arr){ 
                if (idx != index) return value;
            }));
            return true;
        }
    }
}

export const people = peopleStore();
export const loading = writable(false);
export const errors = writable(false);