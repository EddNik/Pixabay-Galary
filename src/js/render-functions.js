import SimpleLightbox from 'simplelightbox';
import '../../node_modules/simplelightbox/dist/simple-lightbox.min.css';

export const gallery = document.querySelector('.gallery');
export const btnLoader = document.querySelector('.load-more');

const simpleLightBox = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  overlayOpacity: 0.95,
});

export async function createGallery(images) {
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

  simpleLightBox.refresh();
}

export function showLoader(loader) {
  loader.classList.add('loader');
  loader.textContent = 'Loading';
}

export function hideLoader(loader) {
  loader.classList.remove('loader');
  loader.textContent = '';
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

export function scroll() {
  const galleryItem = gallery.lastChild;
  const rect = galleryItem.getBoundingClientRect();
  window.scrollBy(0, rect.height * 2);
}
