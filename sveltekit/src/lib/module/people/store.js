import { writable } from "svelte/store";
const {set, update, subscribe} = writable(0);

const getFullname = (firstname, middlename, lastname) => {
    return `${firstname} ${middlename[0]}. ${lastname}`;
};
const getAge = (birthdate) => {
    return new Number((new Date().getTime() - new Date(birthdate).getTime()) / 31536000000).toFixed(0);
};

const peopleStore = () => {
    return {
        subscribe,
        add: (data) => {
            data.fullname = getFullname(data.firstname, data.middlename, data.lastname);
            data.age = getAge(data.birthdate);
            update(val => val ? [...val, data] : [data]);
        },
        update: (index, data) => {
            data.fullname = getFullname(data.firstname, data.middlename, data.lastname);
            data.age = getAge(data.birthdate);
            update(val => val.map(function(value, idx, arr){ 
                if (idx != index) return value;
                else return data;
            }));
        },
        delete: (index) => {
            update(val => val.filter(function(value, idx, arr){ 
                if (idx != index) return value;
            }));
        }
    }
}

export const people = peopleStore();
