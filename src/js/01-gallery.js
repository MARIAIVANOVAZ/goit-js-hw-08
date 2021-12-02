import SimpleLightbox from 'simplelightbox';
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';
// Add imports above this line

// Change code below this line



// Change code below this line
const gallery = document.querySelector(".gallery");


const galleryMarkup = createGallery(galleryItems);
gallery.innerHTML = galleryMarkup;


function createGallery (galleryItems) {
  return galleryItems.map(({preview, original, description }) => {
      return   `<li><a class="gallery__item" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
    </a></li>`}).join('');
};
// console.log(galleryMarkup);


console.log(galleryItems);

var lightbox = new SimpleLightbox('.gallery a', {captionsData : 'alt',
captionDelay: 250,
});


// gallery.addEventListener('click', onOpenLightBox);

// function onOpenLightBox(event) {
//     event.preventDefault();

//     lightbox.options.captionsData = 'alt';
//     lightbox.options.captionDelay = 250;

// }