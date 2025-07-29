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
} from './js/render-functions';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

let page = 1;
let query = '';
let total_pages = 0;
const per_page = 15;
let prevQuery = '';

const loader = document.querySelector('.js-loader');
const loaderMore = document.querySelector('.js-loader-more');

form.addEventListener('submit', async event => {
  event.preventDefault();
  clearGallery();

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
    showLoadMoreButton();
  } catch (error) {
    iziToastOption.message = error.message;
    iziToast.show(iziToastOption);
    setTimeout(() => {
      hideLoader(loader);
    }, 500);
  }
});

btnLoader.addEventListener('click', async event => {
  event.preventDefault();
  showLoader(loaderMore);
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
    hideLoader(loaderMore);
  } catch (error) {
    iziToastOption.message = error.message;
    iziToast.show(iziToastOption);
    setTimeout(() => {
      hideLoader(loaderMore);
    }, 500);
  }
});
