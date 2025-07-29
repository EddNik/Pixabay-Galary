import SimpleLightbox from 'simplelightbox';
import '../../node_modules/simplelightbox/dist/simple-lightbox.min.css';

export const gallery = document.querySelector('.gallery');
export const btnLoader = document.querySelector('.load-more');

export function createGallery(images) {
  const listImages = images
    .map(
      ({
        largeImageURL,
        webformatURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => {
        return `<li class="gallery-item">
          <a class="gallery-link" href="${largeImageURL}">
            <img
              class="gallery-image"
              src="${webformatURL}"
              alt="${tags}"
            />
          </a>
          <div class="gallery-options-container">
          <div class="gallery-options">
            <h3 class="count-option">Likes</h3>
            <p>${likes}</p>
          </div>
          <div class="gallery-options">
            <h3 class="count-option">Views</h3>
            <p>${views}</p>
          </div>
          <div class="gallery-options">
            <h3 class="count-option">Comments</h3>
            <p>${comments}</p>
          </div>
          <div class="gallery-options">
            <h3 class="count-option">Downloads</h3>
            <p>${downloads}</p>
          </div>
         </div>
        </li>`;
      }
    )
    .join('');

  gallery.insertAdjacentHTML('beforeend', listImages);

  new SimpleLightbox('.gallery a', {
    captionDelay: 250,
    overlayOpacity: 0.95,
  }).refresh();
}

export function showLoader(loader) {
  loader.classList.add('loader');
}

export function hideLoader(loader) {
  loader.classList.remove('loader');
}

export function clearGallery() {
  gallery.innerHTML = '';
}

export function showLoadMoreButton() {
  btnLoader.classList.remove('btn-loader');
}

export function hideLoadMoreButton() {
  btnLoader.classList.add('btn-loader');
}
