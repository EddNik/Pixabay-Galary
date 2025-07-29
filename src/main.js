import getImagesByQuery from './js/pixabay-api';
import { iziToastOption } from './js/pixabay-api';
import {
  createGallery,
  hideLoader,
  showLoader,
  clearGallery,
  showLoadMoreButton,
  hideLoadMoreButton,
  btnLoader,
  gallery,
} from './js/render-functions';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

let page = 1;
let query = '';
let total_pages = 0;
const per_page = 15;
let prevQuery = '';
const spanElementsMarkup = document.createElement('span');
spanElementsMarkup.textContent = 'Loading';

form.addEventListener('submit', async event => {
  event.preventDefault();
  clearGallery();

  //time loader visible after form
  gallery.insertAdjacentElement('beforebegin', spanElementsMarkup);
  const loader = document.querySelector('span');

  try {
    query = form.elements['search-text'].value.trim();
    showLoader(loader);

    // reset number of page when type a new word
    if (query !== prevQuery) {
      page = 1;
    }
    prevQuery = query;
    let { totalHits, hits } = await getImagesByQuery(query, page);
    total_pages = Math.ceil(totalHits / per_page);

    if (Array.isArray(hits) && hits.length === 0) {
      hideLoadMoreButton();
      page = 1;
      throw new Error(
        'Sorry, there are no images matching your search query. Please try again!'
      );
    }

    //Перевірка кінця колекції
    if (page > total_pages) {
      hideLoadMoreButton();
      page = 1;
      form.reset();
      throw new Error('We are sorry, there are no more posts to load');
    }

    if (!Boolean(query)) {
      hideLoadMoreButton();
      throw new Error('Sorry, this name images is empty. Please try again!');
    }

    createGallery(hits);
    hideLoader(loader);
    spanElementsMarkup.remove();
    showLoadMoreButton();
  } catch (error) {
    iziToastOption.message = error.message;
    iziToast.show(iziToastOption);
    setTimeout(() => {
      hideLoader(loader);
      spanElementsMarkup.remove();
    }, 500);
  }
});

btnLoader.addEventListener('click', async event => {
  event.preventDefault();
  gallery.insertAdjacentElement('afterend', spanElementsMarkup);
  const loader = document.querySelector('span');
  showLoader(loader);
  page += 1;

  try {
    const { hits } = await getImagesByQuery(query, page);

    if (page > total_pages) {
      hideLoadMoreButton();
      page = 0;
      form.reset();
      throw new Error('We are sorry, there are no more posts to load');
    }

    createGallery(hits);
    hideLoader(loader);
    spanElementsMarkup.remove();
  } catch (error) {
    iziToastOption.message = error.message;
    iziToast.show(iziToastOption);
    setTimeout(() => {
      hideLoader(loader);
      spanElementsMarkup.remove();
    }, 500);
  }
});
