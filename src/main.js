import { fetchImages } from './js/pixabay-api.js';
import { displayImages, displayToast } from './js/render-functions.js';

const searchForm = document.querySelector("form");
const gallery = document.querySelector(".gallery");
const loader = document.querySelector(".spinner")
export const loadButton = document.querySelector(".load-button")
export let page = 1;
export let perPage = 15;
let searchData = '';

loadButton.classList.add('is-hidden')
searchForm.addEventListener("submit", event => {
    event.preventDefault();
    gallery.innerHTML = "";
    page = 1;
    loader.classList.remove('is-hidden');
    loadButton.classList.remove('is-hidden')

    searchData = event.target.elements.search_input.value.trim();
    if (searchData === "") {
        displayToast('Please enter a search term.', 'warning');
        loader.classList.add('is-hidden');
        return;
    }
    fetchImages(searchData, page, perPage)
        .then(images => {
            if (images.total === 0) {
                displayToast('Sorry, there are no images matching your search query. Please try again!', 'error');
                return;
            }

            displayImages(images.hits, gallery);
        })
        .catch(error => {
            console.error('Error fetching images:', error);
            displayToast('An error occurred while fetching images. Please try again later.', 'error');
        })
        .finally(() => {
            event.target.reset();
            loader.classList.add('is-hidden');
        });
    
});
loadButton.addEventListener("click", async () => {
    try {
        page += 1;
        const images = await fetchImages(searchData, page, perPage);
        displayImages(images.hits, gallery);
    }
    catch (error) {
        console.log (error)
   }
})
