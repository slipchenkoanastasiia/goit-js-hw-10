import axios from 'axios';

axios.defaults.baseURL = 'https://api.thecatapi.com';
axios.defaults.headers.common['x-api-key'] =
  'live_VIWdPJ69sSBWCYa0nSD72LOLZ9sldbrVH0SnBNVrxsMdeNPZg3pLyAGvjmFBrUNo';

export function fetchBreeds() {
  return axios
    .get('/v1/breeds')
    .then(response => response.data)
    .catch(error => {
      console.error(error);
    });
}

export function fetchCatByBreed(breedId) {
  return axios
    .get(`/v1/images/search?breed_ids=${breedId}`)
    .then(response => response.data[0])
    .catch(error => {
      console.error(error);
    });
}