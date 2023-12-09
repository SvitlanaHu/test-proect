import { getPhotos } from "./unsplash-api";

const formEl = document.querySelector('.js-search-form');
const ulEl = document.querySelector('.js-gallery');
const moreBtnEl = document.querySelector('.js-load-more')

let page = 1;
const perPage = 12;
let query = null;

formEl.addEventListener('submit', onSubmit)
moreBtnEl.addEventListener('click', onclick)
async function onSubmit(evt) {
evt.preventDefault()
page = 1;
const searchQuery = evt.target.elements['user-search-query'].value.trim()
query = searchQuery;
try {
const { data } = await getPhotos(page, query)
const { total_pages, total, results } = data;
if (results.length === 0) {
    return alert('Sorry, there are no images matching your search query. Please try again.')
} 
ulEl.innerHTML=createMarkup(results);
alert(`Hooray! We found ${total} images.`)
if (total > perPage) {
    moreBtnEl.classList.remove('is-hidden')
}
} catch(error) {
    console.log(error.message);
}
}

async function onclick(evt) {
page +=1;
console.log(query);
try {
    const { data } = await getPhotos(page, query)
    const { total_pages, results, total } = data;
    ulEl.insertAdjacentHTML('beforeend', createMarkup(results))
    const lastPage = Math.ceil(total / perPage)
    // if (total_pages === page) {
    //     alert("We're sorry, but you've reached the end of search results.")
    //     moreBtnEl.classList.add('is-hidden')
    // };
    if (lastPage === page) {
            alert("We're sorry, but you've reached the end of search results.")
            moreBtnEl.classList.add('is-hidden')
        };
} catch(error) {
    console.log(error.message);
  
}
}

function createMarkup(arr) {
    return arr.map(item => `<li class='gallery__item'>
    <img src='${item.urls.small}' alt='${item.alt_description}' class='gallery-img' />
  </li>`).join('')
}