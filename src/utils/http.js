import axios from "axios";

export const httpClient = axios.create({
    baseURL: import.meta.env.VITE_BASE_API
});

const _send = async (method, path, data, config) =>{
    const response = await httpClient.request({
        ...config,
        method,
        url: path,
        data,
    })
    return response.data
}

const get = async (path, config) => {
    const result = await _send("get", path, null, config);
    return result;
}
const post = async (path, data, config) => {
    const result = await _send("post", path, data, config);
    return result;
}
const patch = async (path, data, config) => {
    const result = await _send("patch", path, data, config);
    return result;
}
const put = async (path, data, config) => {
    const result = await _send("put", path, data, config);
    return result;
}
const del = async (path, config) => {
    const result = await _send("delete", path, null, config);
    return result;
}

const http = { get, post, put, patch, del }
export default http;