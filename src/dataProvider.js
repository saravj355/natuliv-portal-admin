import { encode } from 'querystring';
import { fetchUtils } from 'react-admin';
import Config from './config/config';

const httpClient = fetchUtils.fetchJson;

function getQueryString (params = {}) {
    const { page, perPage } = params.pagination;
    const { field, order } = params.sort;

    const queryString = {
        sortBy: field,
        sortOrder: order,
        offset: (page - 1) * perPage,
        limit: page * perPage - 1
    };

    if (params.target) {
        queryString[params.target] = params.id;
    }

    return `${encode(queryString)}&${encode(params.filter)}`;
}

export default {
    getList: (resource, params) => {
        const queryString = getQueryString(params);
        const url = `${Config.API_URL}/${resource}?${queryString}`;
        return httpClient(url).then(({ json }) => ({
            data: json,
            total: json.length
        }));
    },

    update: (resource, params) => {
        const url = `${Config.API_URL}/${resource}/${params.id}`;
        return httpClient(url, {
            method: 'PUT',
            body: JSON.stringify(params.data)
        }).then(({ json }) => ({
            data: json,
            total: json.length
        }));
    },

    create: (resource, params) => {
        const url = `${Config.API_URL}/${resource}`;
        return httpClient(url, {
            method: 'POST',
            body: JSON.stringify(params.data)
        }).then(({ json }) => ({
            data: json,
            total: json.length
        }));
    },

    getOne: (resource, params) => {
        const url = `${Config.API_URL}/${resource}/${params.id}`;
        return httpClient(url).then(({ json }) => ({
            data: json,
            total: json.length
        }));
    },

    getMany: (resource) => {
        const url = `${Config.API_URL}/${resource}`;
        console.log('getMany', url);

        return httpClient(url).then(({ json }) => ({
            data: json,
            total: json.length
        }));
    },

    getManyReference: (resource, params) => {
        const match = /_nested_(.*)/g.exec(params.target);
        const referenceResource = match
            ? `${resource}/${params.id}/${match[1]}`
            : resource;

        const queryString = getQueryString(params);
        const url = `${Config.API_URL}/${referenceResource}?${queryString}`;

        return httpClient(url).then(({ json }) => ({
            data: json,
            total: json.length
        }));
    }
};
