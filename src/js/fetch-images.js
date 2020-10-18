
import debounce from 'lodash.debounce';
import refs from './refs'
import makeImageMarkup from './image-markup'
// import fetchImg from './fetch-images'
import apiService from './apiService'

refs.serch.addEventListener('input', debounce(getInputQuery, 600))

function getInputQuery(event){
    event.preventDefault();
    apiService.query = event.target.value   
    refs.gallery.innerHTML = "";
    refs.serch.reset();
    apiService.resetPage();
    apiService.fetchImg().then(hits => makeImageMarkup(hits))
}

refs.btnLoadMore.addEventListener('click', ()  =>{
    apiService.fetchImg().then(hits => makeImageMarkup(hits))
 
})






// export default function fetchImg (serchQuery, page=1){

//     const apiKey = "18710894-cf47c53574f7c60443851e774"
//     const url =`https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${serchQuery}&page=${page}&per_page=12&key=${apiKey}`
//     // refs.gallery.innerHTML = "";
//     // refs.serch.reset();
//     return fetch(url).then(res => res.json())

//     }