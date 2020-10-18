import refs from './refs'
import imageTemplate from '../templates/image-card-template.hbs'

export default function makeImageMarkup(value){
    const imageMarkup = imageTemplate(value);
    refs.gallery.insertAdjacentHTML('beforeend', imageMarkup);
}