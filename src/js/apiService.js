import imageTemplate from '../templates/image-card-template.hbs'

const refs = {
    serch : document.querySelector('.search-form'),
    gallery : document.querySelector('.gallery')
}

console.log(refs.serch.query.value);

const debounce = require('lodash.debounce');
// refs.serch.addEventListener('input', debounce(getInputQuery, 500))


// function getInputQuery(){
    
//     console.log(target.value);
//     const serchQuery = refs.serch.value
//     // console.log(refs.serch.value);
//     // return event.target.value  


//     const apiKey = "18710894-cf47c53574f7c60443851e774"
//     const url =`https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${serchQuery}&page=1&per_page=12&key=${apiKey}`

//     // function fetchPictures(){
//     fetch(url).then(res => res.json()).then(data => makeImageMarkup(data))
//     // }

// }

   


// console.log(serchQuery);



function makeImageMarkup(value){
    const imageMarkup = imageTemplate(value);
    refs.gallery.insertAdjacentHTML('beforeend', imageMarkup);
}

// console.log(refs.serch.value);

const apiKey = "18710894-cf47c53574f7c60443851e774"
    const url =`https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=cat&page=1&per_page=12&key=${apiKey}`

    // function fetchPictures(){
fetch(url).then(res => res.json()).then(({hits}) => {
    makeImageMarkup(hits)
    console.log(hits)
})