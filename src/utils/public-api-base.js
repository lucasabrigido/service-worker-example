import axios from 'axios';

export const defaultApi = axios.create({
    baseURL: 'https://kp10ik6n8i.execute-api.us-east-1.amazonaws.com/dev',
});

const baseHeaders = (othersHeaders = {}) => ({
    headers: {
        'Content-Type': 'application/json',
        ...othersHeaders,
    },
});

export const Get = async (url, params, headers) => defaultApi
    .get(url, {params, ...baseHeaders(headers)})
    .then((data) => data.data)
    .catch((error) => {
        throw error;
    });

export const Post = async (url, data, headers) => defaultApi
    .post(url, data, baseHeaders(headers))
    .then((d) => d.data)
    .catch((error) => {
        throw error;
    });

export const Delete = async (url, data, headers) => defaultApi
    .delete(url, {data, headers: baseHeaders(headers).headers})
    .then((d) => d.data)
    .catch((error) => {
        throw error;
    });

export const Put = async (url, data, params, headers) => defaultApi
    .put(url, data, {
        params,
        ...baseHeaders(headers),
    })
    .then((d) => d.data)
    .catch((error) => {
        throw error;
    });

export const Patch = async (url, data, params, headers) => defaultApi
    .patch(url, data, {params, ...baseHeaders(headers)})
    .then((d) => d.data)
    .catch((error) => {
        throw error;
    });
