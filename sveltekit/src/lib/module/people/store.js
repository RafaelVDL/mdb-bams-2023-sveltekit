import { get } from 'svelte/store';
import { writable } from "svelte/store";
// set store
let store = writable([]);
let storeName = "people";
const {set, update, subscribe} = store;

const getFullname = (firstname, middlename, lastname) => {
    return `${firstname} ${middlename[0]}. ${lastname}`;
};
const getAge = (birthdate) => {
    return new Number((new Date().getTime() - new Date(birthdate).getTime()) / 31536000000).toFixed(0);
};

// check if running on client
const isBrowser = typeof window !== 'undefined';

// save data
const saveData = (value) => {
    if(!isBrowser) return;
    // set localStorage
    localStorage.setItem(storeName, JSON.stringify(value));
    // set store
    set(value);
}

const peopleStore = () => {
    // get localStorage
    isBrowser && localStorage.getItem(storeName) && set(JSON.parse(localStorage.getItem(storeName)));

    return {
        subscribe,
        add: (data) => {
            const value = get(store);
            data.fullname = getFullname(data.firstname, data.middlename, data.lastname);
            data.age = getAge(data.birthdate);
            const newValue = [...value, data];
            saveData(newValue);
        },
        update: (index, data) => {
            const value = get(store);
            data.fullname = getFullname(data.firstname, data.middlename, data.lastname);
            data.age = getAge(data.birthdate);
            const newValue = value.map(function(val, idx, arr){ 
                if (idx != index) return val;
                else return data;
            });
            saveData(newValue);
        },
        delete: (index) => {
            const value = get(store);
            const newValue = value.filter(function(val, idx, arr){ 
                if (idx != index) return val;
            });
            saveData(newValue);
        }
    }
}

export const people = peopleStore();
