// У файлі pixabay-api.js зберігай функції для виконання HTTP-запитів:

// getImagesByQuery(query). Ця функція повинна приймати один параметр query (пошукове слово, яке є рядком), здійснювати
//  HTTP-запит і повертати значення властивості data з отриманої відповіді.
import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '52809699-ccc5c93f5d687b44e4326bc01';

async function getImagesByQuery(query) {
  const url =
    `${BASE_URL}?key=${API_KEY}` +
    `&q=${encodeURIComponent(query)}` +
    `&image_type=photo` +
    `&orientation=horizontal` +
    `&safesearch=true`;

  return axios
    .get(url)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      return [];
    });
}

export default getImagesByQuery;
