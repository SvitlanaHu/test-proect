import axios from 'axios';

const endPoint = '/search/photos';

const instance = axios.create({
  baseURL: 'https://api.unsplash.com',
  timeout: 1000,
  headers: { ['x-api-key']: 'LxvKVGJqiSe6NcEVZOaLXC-f2JIIWZaq_o0WrF8mwJc' },
});

export function getPhotos() {
  return instance.get(`${endPoint}`, {
    params: {
      page: 1,
      query: 'cat',
      client_id: 'LxvKVGJqiSe6NcEVZOaLXC-f2JIIWZaq_o0WrF8mwJc',
    },
  });
}
getPhotos().then(data => console.log(data));
