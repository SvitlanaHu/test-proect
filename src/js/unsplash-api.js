import axios from 'axios';

const endPoint = '/search/photos';

const instance = axios.create({
  baseURL: 'https://api.unsplash.com',
});

export function getPhotos(page, query) {
  return instance.get(`${endPoint}`, {
    params: {
      page: page,
      query: query,
      client_id: 'LxvKVGJqiSe6NcEVZOaLXC-f2JIIWZaq_o0WrF8mwJc',
      per_page: 12,
    },
  });
}