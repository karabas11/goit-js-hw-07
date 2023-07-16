import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallerySmallImg = document.querySelector('.gallery');

const markup = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      loading="lazy"
      alt="${description}"
     
    />
  </a>
</li>`,
  )
  .join('');

gallerySmallImg.insertAdjacentHTML('beforeend', markup);

gallerySmallImg.addEventListener('click', onOpenModal);

function onOpenModal(evt) {
  evt.preventDefault();

  if (!evt.target.classList.contains('gallery__image')) {
    return;
  } else {
    const bigImg = evt.target.dataset.source;
    const instance = basicLightbox.create(`<img src="${bigImg}"></img>`, {
      onShow: instance => {
        window.addEventListener('keydown', evt => {
          if (evt.code === 'Escape') instance.close();
        });
      },
      onClose: instance => {
        window.removeEventListener('keydown', evt => instance.close());
      },
    });
    instance.show();
  }
}
