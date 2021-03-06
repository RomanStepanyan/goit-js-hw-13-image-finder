import debounce from 'lodash.debounce';
import refs from './refs';
import makeImageMarkup from './image-markup';
import apiService from './apiService';

refs.serch.addEventListener('input', debounce(getInputQuery, 700));

function getInputQuery(event) {
  event.preventDefault();
  apiService.query = event.target.value;
  refs.gallery.innerHTML = '';
  refs.serch.reset();
  apiService.resetPage();
  refs.btnLoadMore.classList.add('is-hidden');
  apiService
    .fetchImg()
    .then(hits => {
      makeImageMarkup(hits); 
      refs.btnLoadMore.classList.remove('is-hidden');
      if (hits.length < 12) {
        refs.btnLoadMore.classList.add('is-hidden');
        }
    })
}

refs.btnLoadMore.addEventListener('click', () => {
  apiService.fetchImg().then(hits => {
    makeImageMarkup(hits);
    if (hits.length < 12) {
        refs.btnLoadMore.classList.add('is-hidden');
    }
    window.scrollTo({
      top: document.documentElement.offsetHeight,
      behavior: 'smooth',
    });
  });

});

import * as basicLightbox from 'basiclightbox';

refs.gallery.addEventListener('click', event => {
  const imageSrc = event.target.currentSrc;
  const imageHeight = event.target.naturalHeight;
  const imageWidth = event.target.naturalWidth;
  const instance = basicLightbox.create(
    `<img src="${imageSrc}" width="${imageWidth}" height="${imageHeight}">`,
  );
  instance.show();
});
