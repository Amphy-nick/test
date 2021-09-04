export default class NewsApiService {
constructor(){
    this.searchQuery = '';
    this.page = 1;
}

fetchArticles(){
console.log(this)
    const KEY = 'key=23206361-11fddcc9c6397c9794392b9fa'
const url = `https://pixabay.com/api/?${KEY}&q=${this.searchQuery}&
image_type=photo&per_page=5&${this.page}`

return fetch(url)
.then(r => r.json())
.then(data => {

    this.incrementPage();

    return data.hits;
})
}

incrementPage() {
    this.page +=1
}

resetPage() {
    this.page = 1
}

get query() {
    return this.searchQuery;
}

set query(newQuery) {
    this.searchQuery = newQuery;
}
}

