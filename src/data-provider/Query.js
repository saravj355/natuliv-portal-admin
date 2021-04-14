import { stringify } from 'querystring';

export default function handleQueryString (params) {
    const { page, perPage } = params.pagination;
    const { field, order } = params.sort;
    const queryString = { query: '' };

    if (params.target) {
        queryString.query += `${params.target}=${params.id}`;
    }

    if (params.filter) {
        queryString.query += `${stringify(params.filter)}`;
    }

    // sort field
    queryString.query += `&sortBy=${field}`;
    queryString.query += `&sortOrder=${order}`;
    // range field
    queryString.query += `&offset=${(page - 1) * perPage}`;
    queryString.query += `&limit=${page * perPage - 1}`;

    return queryString.query;
}
