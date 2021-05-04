import { fetchUtils } from 'react-admin';
import handleQueryString from './Query';

const apiUrl = 'http://localhost:5000';
const httpClient = fetchUtils.fetchJson;
export default {
    getList: (resource, params) => {
        const queryString = handleQueryString(params);
        const url = `${apiUrl}/${resource}?${queryString}`;
        console.log(url);
        return httpClient(url).then(({ json }) => ({
            data: json,
            total: json.length
        }));
    },

    update: (resource, params) => {
        httpClient(`${apiUrl}/${resource}/${params.id}`, {
            method: 'PUT',
            body: JSON.stringify(params.data)
        }).then(({ json }) => ({ data: json, total: json.length }));
    },

    create: (resource, params) => {
        console.log(apiUrl, resource);
        httpClient(`${apiUrl}/${resource}/`, {
            method: 'POST',
            body: JSON.stringify(params.data)
        }).then(({ json }) => ({
            data: json,
            total: json.length
        }));
    },

    getOne: (resource, params) => {
        httpClient(`${apiUrl}/${resource}/${params.id}`).then(({ json }) => ({
            data: json,
            total: json.length
        }));
    },

    getMany: (resource) => {
        const url = `${apiUrl}/${resource}`;
        return httpClient(url).then(({ json }) => ({
            data: json,
            total: json.length
        }));
    },

    getManyReference: (resource, params) => {
        const queryString = handleQueryString(params);

        const url = `${apiUrl}/${resource}?${queryString}`;
        return httpClient(url).then(({ json }) => ({
            data: json,
            total: json.length
        }));
    }
};
