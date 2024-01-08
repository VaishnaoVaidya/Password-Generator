import axios from "axios";

export const MyAxiosGetRequest = async () =>  {
    const res = await axios({
        method: 'GET',
        url: "https://jsonplaceholder.typicode.com/posts/",
    })
    return res;
}

export const MyAxiosPostRequest = async data =>  {
    const res = await axios({
        method: 'POST',
        url: "https://jsonplaceholder.typicode.com/posts/",
        data: data,
    })
    return res;
}

export const MyAxiosPutRequest = async (id, data) =>  {
    const res = await axios({
        method: 'put',
        url: "https://jsonplaceholder.typicode.com/posts/" + id,
        data: data,
    })
    return res;
}

export const MyAxiosPatchRequest = async (id, data) =>  {
    const res = await axios({
        method: 'patch',
        url: "https://jsonplaceholder.typicode.com/posts/" + id,
        data: data,
    })
    return res;
}