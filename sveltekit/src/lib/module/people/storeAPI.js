import { PUBLIC_DATABASE_URL } from "$env/static/public";
import { writable } from "svelte/store";

// set stores
const data = writable([]);
const {set, update, subscribe} = data;
export const loading = writable(false);
export const errors = writable(false);

// set url
const urlList = PUBLIC_DATABASE_URL + '/api/collections/people_list/records/';
const urlRecords = PUBLIC_DATABASE_URL + '/api/collections/people/records/';

// fetch data
const fetchOne = async (id) => {
    // get default data
    const response = await fetch(urlList + id);
    const record = await response.json();
    const newRecord = record;
    newRecord.photo = PUBLIC_DATABASE_URL + `/api/files/${record.collectionName}/${record.id}/${record.photo}`;
    newRecord.birthdate = record.birthdate.split(" ")[0];
    // console.log('fetchOne', newRecord);
    return newRecord;
}
const fetchAll = async () => {
    // get default data
    const response = await fetch(urlList);
    const record = await response.json();
    const newRecord = record.items.map(val => {
        const item = val;
        item.photo = PUBLIC_DATABASE_URL + `/api/files/${val.collectionName}/${val.id}/${val.photo}`;
        item.birthdate = val.birthdate.split(" ")[0];
        return item;
    });
    // console.log('fetchAll', newRecord);
    set(newRecord);
}

const peopleStore = () => {
    fetchAll();

    return {
        subscribe,
        get: async (id) => {
            return await fetchOne(id);
        },
        add: async (data) => {
            loading.set(true);
            // modify data
            const dataObj = Object.fromEntries(data.entries());
            dataObj.photo = dataObj.photoFile;
            delete dataObj.photoFile;

            // revert data to formdata
            var formData = new FormData();
            for (let [key, val] of Object.entries(dataObj)) {
                formData.append(key, val);
            }
            // console.log('formData', dataObj, formData.entries());

            // submit
            const response = await fetch(urlRecords, {
                method: "POST", 
                body: formData
            });

            loading.set(false);

            // get response
            if(response.status == 200) {
                fetchAll();
                return true;
            } else {
                errors.set(await response.json());
                return false;
            }
        },
        /**
         * This function is used to update API Endpoint
         * @param {Number} id could be index
         * @param {FormData} data formdata object
         * @returns boolean
         * @author John Doe
         */
        update: async (id, data) => {
            loading.set(true);
            // modify data
            const dataObj = Object.fromEntries(data.entries());
            dataObj.photo = dataObj.photoFile;
            delete dataObj.photoFile;

            // revert data to formdata
            var formData = new FormData();
            for (let [key, val] of Object.entries(dataObj)) {
                if(!(val instanceof File && !val.size))
                    formData.append(key, val);
            }
            // console.log('formData', dataObj, formData.entries());

            // submit
            const response = await fetch(urlRecords + id, {
                method: "PATCH", 
                body: formData
            });

            loading.set(false);

            // get response
            if(response.status == 200) {
                fetchAll();
                return true;
            } else {
                errors.set(await response.json());
                return false;
            }
        },
        delete: async (id) => {
            loading.set(true);
            // submit
            const response = await fetch(urlRecords + id, { method: "DELETE" });
            loading.set(false);
            // get response
            if(response.status == 204) {
                fetchAll();
                return true;
            } else {
                errors.set(await response.json());
                return false;
            }
        }
    }
}
export const people = peopleStore();
