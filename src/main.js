import getImagesByQuery from './js/pixabay-api';
import { iziToastOption } from './js/pixabay-api';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import * as render from './js/render-functions';

const form = document.querySelector('.form');
const page = {};
let requestStatus = true;

const loader = document.querySelector('.js-loader');
const loaderMore = document.querySelector('.js-loader-more');

form.addEventListener('submit', async event => {
  event.preventDefault();
  page.query = form.elements['search-text'].value.trim();

  try {
    if (!Boolean(page.query)) {
      form.reset();
      throw new Error('Sorry, this name images is empty. Please try again!');
    }

    // init page object : reset page number when entering a new search category OR when changing status request due to error
    if (page.query !== page.previousQuery || !requestStatus) {
      page.number = 1;
      page.previousQuery = page.query;
      requestStatus = true;
    }
    render.clearGallery();
    render.showLoader(loader);
    const { totalHits, hits } = await getImagesByQuery(page.query, page.number);
    page.total_pages = Math.ceil(totalHits / 15);

    //Перевірка кінця колекції
    if (page.number > page.total_pages) {
      render.hideLoadMoreButton();
      throw new Error('We are sorry, there are no more posts to load');
    } else if (totalHits === 0) {
      form.reset();
      render.hideLoadMoreButton();
      throw new Error(
        'Sorry, there are no images matching your search query. Please try again!'
      );
    } else {
      render.createGallery(hits);
      if (page.number < page.total_pages) {
        render.showLoadMoreButton();
      }
    }
  } catch (error) {
    iziToastErrorMessage(error);
  }
  render.hideLoader(loader);
});

render.btnLoader.addEventListener('click', async event => {
  event.preventDefault();
  page.number += 1;

  try {
    render.showLoader(loaderMore);
    const { hits } = await getImagesByQuery(page.query, page.number);
    render.createGallery(hits);
    render.scroll();

    //Перевірка кінця колекції
    if (page.number >= page.total_pages || hits.length <= 0) {
      render.hideLoadMoreButton();
      throw new Error('We are sorry, there are no more posts to load');
    }
  } catch (error) {
    iziToastErrorMessage(error);
  }
  render.hideLoader(loaderMore);
});

function iziToastErrorMessage(error) {
  iziToastOption.message = error.message;
  iziToast.show(iziToastOption);
  requestStatus = false;
}

form.reset();
