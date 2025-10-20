import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// Контейнер галереї та лоадер (припускаю ці селектори; зміни під свою розмітку)
const galleryEl = document.querySelector('.gallery');
const loaderEl = document.querySelector('.loader'); // елемент лоадера з CSS-класом .loader

// Один екземпляр лайтбоксу на всю сторінку
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

// Створює HTML-розмітку для масиву картинок (внутрішня допоміжна функція)
function buildGalleryMarkup(images) {
  return images
    .map(item => {
      return `
        <li class="gallery-item">
          <a href="${item.largeImageURL}">
            <img src="${item.webformatURL}" alt="${item.tags}" />
          </a>
          <div class="info">
            <p><b>Likes:</b> ${item.likes}</p>
            <p><b>Views:</b> ${item.views}</p>
            <p><b>Comments:</b> ${item.comments}</p>
            <p><b>Downloads:</b> ${item.downloads}</p>
          </div>
        </li>
      `;
    })
    .join('');
}

/**
 * createGallery(images)
 * Рендерить елементи в контейнер галереї та оновлює SimpleLightbox.
 * Нічого не повертає.
 */
function createGallery(images) {
  if (!Array.isArray(images) || images.length === 0) return;
  if (!galleryEl) return;

  const markup = buildGalleryMarkup(images);
  // Можеш використовувати insertAdjacentHTML('beforeend', ...) для "підвантаження сторінок"
  galleryEl.insertAdjacentHTML('beforeend', markup);

  // Після змін у DOM треба “освіжити” лайтбокс:
  lightbox.refresh();
}

/**
 * clearGallery()
 * Очищає вміст контейнера галереї та “рефрешить” лайтбокс.
 * Нічого не повертає.
 */
function clearGallery() {
  if (!galleryEl) return;
  galleryEl.innerHTML = '';
  lightbox.refresh();
}

/**
 * showLoader()
 * Додає клас для відображення лоадера.
 * Нічого не повертає.
 */
function showLoader() {
  if (!loaderEl) return;
  loaderEl.classList.add('is-visible'); // у CSS зроби .loader.is-visible { display: block; } і .loader { display: none; }
}

/**
 * hideLoader()
 * Прибирає клас відображення лоадера.
 * Нічого не повертає.
 */
function hideLoader() {
  if (!loaderEl) return;
  loaderEl.classList.remove('is-visible');
}

export { createGallery, clearGallery, showLoader, hideLoader, lightbox };
