'use strict'

import items from './gallery-items.js';

const ul = document.querySelector('.gallery');
ul.addEventListener('click', handlerModalOpen);

const galleryBuilder = items => items.map(items =>
    `<li class="gallery__item">
    <a class="gallery__link"
        href="${items.original}">
        <img
            class="gallery__image"
            src="${items.preview}"
            data-source="${items.original}"
            alt="${items.description}"
        />
        <span class="gallery__icon">
            <i class="material-icons">zoom_out_map</i>
        </span>
    </a>
</li>`).join('');
ul.insertAdjacentHTML('afterbegin', galleryBuilder(items));

const closeButton = document.querySelector('.lightbox__button');
const lightbox = document.querySelector('div.lightbox');
const lightboxContent = document.querySelector('div.lightbox__content');
const lightboxOverlay = document.querySelector('div.lightbox__overlay')
const lightboxImg = document.querySelector('.lightbox___image');

closeButton.addEventListener('click', handlerModalClose);
lightbox.addEventListener('click', handlerLightboxClose);

function handlerModalOpen(e) {
    e.preventDefault();
    lightbox.classList.add('is-open');
    window.addEventListener('keydown', handleEsc);
    lightboxImg.src = e.target.dataset.source;
}
function handlerModalClose(e) {
    lightbox.classList.remove('is-open');
    window.removeEventListener('keydown', handleEsc);
    lightboxImg.src = '';
}
function handlerLightboxClose(e) {
    if (e.target === lightboxContent || e.target === lightboxOverlay) {
        handlerModalClose();
    }
}
function handleEsc(e) {
    if (e.code === "Escape") {
        handlerModalClose()
    }
}