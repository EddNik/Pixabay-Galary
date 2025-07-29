import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import '../css/styles.css';

export const iziToastOption = {
  timeout: 5000,
  theme: 'dark',
  messageColor: 'white',
  icon: 'custom-svg-icon',
  iconColor: '#FFFFFF',
  closeOnClick: true,
  backgroundColor: '#ef4040',
  position: 'topRight',
};

export default async function getImagesByQuery(query, page) {
  try {
    const response = await axios.get('https://pixabay.com/api/', {
      params: {
        key: '51407519-422ec1314326ee48566ae1dd4',
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true',
        per_page: 15,
        page: page,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
    iziToastOption.message = `${error.message} : ${error.code}`;
    iziToast.error(iziToastOption);
    setTimeout(() => {
      hideLoader();
    }, 500);
  }
}
