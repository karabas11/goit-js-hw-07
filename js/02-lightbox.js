import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallerySmallImg = document.querySelector('.gallery');

const markup = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<li class="gallery__item">
<a class="gallery__link" href="${original}">
   <img class="gallery__image" src="${preview}" alt="${description}"/>
</a>
</li>`,
  )
  .join('');

gallerySmallImg.insertAdjacentHTML('beforeend', markup);

console.log(SimpleLightbox);

new SimpleLightbox('.gallery__item a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
  docClose: 'true',
});
