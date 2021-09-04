import './sass/main.scss';
import NewsApiService from './js/api-service';
import markup from './templates/markup.hbs'

const refs = {
    searchForm: document.querySelector('.search-form'),
    articlesContainer: document.querySelector('.gallery'),
    loadMoreBtn: document.querySelector('button[data-action="load-more"]'),
}

const newsApiService = new NewsApiService(); 

refs.searchForm.addEventListener('submit', onSearch);
refs.loadMoreBtn.addEventListener('click', onLoadMore);

function onSearch(e) {
   e.preventDefault();

     newsApiService.query = e.currentTarget.elements.query.value ;
     newsApiService.resetPage();
     newsApiService.fetchArticles().then(appendHitsMarkup)
}

function onLoadMore() {
    
    newsApiService.fetchArticles().then(appendHitsMarkup)
    
}

function appendHitsMarkup(hits) {
    refs.articlesContainer.insertAdjacentHTML('beforeend', markup(hits))
}
