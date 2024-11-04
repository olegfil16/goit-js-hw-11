import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

let lightbox;

export function renderImages(images) {
  const gallery = document.querySelector('.gallery');
  gallery.innerHTML = images
    .map(
      ({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) =>
        `<li>
          <a href="${largeImageURL}">
           <div class="image-info">
          <img src="${webformatURL}" alt="${tags}" width="300">
          
          
            <p><strong>Likes:</strong> ${likes}</p>
            <p><strong>Views:</strong> ${views}</p>
            <p><strong>Comments:</strong> ${comments}</p>
            <p><strong>Downloads:</strong> ${downloads}</p>
          </div>
          
        </li>`
    )
    .join('');

  // Ініціалізуємо або оновлюємо lightbox для галереї
  if (!lightbox) {
    lightbox = new SimpleLightbox('.gallery a');
  } else {
    lightbox.refresh();
  }
}
