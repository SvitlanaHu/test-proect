import axios from "axios";

const BASE_URL = 'https://api.unsplash.com';
const endPoint = '/search/photos';


export function getPhotos() {
    return axios.get(`${BASE_URL}${endPoint}`, {
        params: {
            page: 1,
            query: "cat",
            client_id: "LxvKVGJqiSe6NcEVZOaLXC-f2JIIWZaq_o0WrF8mwJc"
        }
    })
}
getPhotos().then(data => console.log(data));

