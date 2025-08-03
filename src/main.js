import getImagesByQuery from './js/pixabay-api';
import { iziToastOption } from './js/pixabay-api';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import * as render from './js/render-functions';

const form = document.querySelector('.form');
const page = {};

const loader = document.querySelector('.js-loader');
const loaderMore = document.querySelector('.js-loader-more');

form.addEventListener('submit', async event => {
  event.preventDefault();
  render.clearGallery();
  page.query = form.elements['search-text'].value.trim();
  render.showLoader(loader);

  try {
    if (!Boolean(page.query)) {
      form.reset();
      throw new Error('Sorry, this name images is empty. Please try again!');
    }

    // init page object : reset page number when entering a new search category OR when changing state due to error
    if (page.query !== page.previousQuery || !page.state) {
      page.number = 1;
      page.previousQuery = page.query;
      page.state = true;
    }

    const { totalHits, hits } = await getImagesByQuery(page.query, page.number);
    page.total_pages = Math.ceil(totalHits / hits.length);

    //Перевірка кінця колекції
    if (page.number > page.total_pages) {
      throw new Error('We are sorry, there are no more posts to load');
    }

    if (totalHits === 0) {
      form.reset();
      throw new Error(
        'Sorry, there are no images matching your search query. Please try again!'
      );
    } else {
      render.createGallery(hits);
      render.hideLoader(loader);
      render.showLoadMoreButton();
    }
  } catch (error) {
    iziToastErrorMessage(error, loader);
  }
});

render.btnLoader.addEventListener('click', async event => {
  event.preventDefault();
  render.showLoader(loaderMore);
  page.number += 1;

  try {
    const { hits } = await getImagesByQuery(page.query, page.number);
    render.createGallery(hits);
    render.hideLoader(loaderMore);

    scroll();

    //Перевірка кінця колекції
    if (page.number === page.total_pages) {
      throw new Error('We are sorry, there are no more posts to load');
    }
  } catch (error) {
    iziToastErrorMessage(error, loaderMore);
  }
});

function iziToastErrorMessage(error, loader) {
  render.hideLoadMoreButton();
  iziToastOption.message = error.message;
  iziToast.show(iziToastOption);

  // setTimeout is used only to improve visibility
  setTimeout(() => {
    render.hideLoader(loader);
  }, 500);
  page.state = false;
}

function scroll() {
  const galleryItem = render.gallery.lastChild;
  const rect = galleryItem.getBoundingClientRect();
  window.scrollBy(0, rect.height * 3);
}

form.reset();
