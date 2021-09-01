import './sass/main.scss';
// import  debounce  from 'lodash.debounce';
// // import  fetchCountries from './js/fetchCountries';
import menuMrpTemplate from "./templates/markupCountryCard.hbs"
// // import { alert, defaultModules } from '../node_modules/@pnotify/core/dist/PNotify.js';
// // import * as PNotifyMobile from '../node_modules/@pnotify/mobile/dist/PNotifyMobile.js';
 import refs from './js/refs'
 
// fetch('https://restcountries.eu/rest/v2/name/Russia')
// .then(response =>{return response.json()})
// .then(renderCountryCard)
// .catch(error => console.log(error))

refs.inputSearchCountry.addEventListener('input', onSearch)
console.log(refs.inputSearchCountry)
function onSearch(e) {
    // e.preventDefault()
    let searchQuery = document.getElementsByTagName("input")[0].value
    // refs.inputSearchCountry.textContent = e.currentTarget.value
    // searchQuery = e.currentTarget.value
}

fetchCountry(searchQuery)
 .then(renderCountryCard)
.catch(error => console.log(error))

function renderCountryCard(country){
  const markup = menuMrpTemplate(country)
  console.log(markup);
  refs.listPushCounries.innerHTML = markup;
}

function fetchCountry(searchQuery) {
return fetch(`https://restcountries.eu/rest/v2/name/${searchQuery}`)
.then(response =>{return response.json()
})

}


//  const hendlerSubmin = (e) => {
//    e.preventDefault()
//    const value = refs.inputSearchCountry.value
 
//      fetch(`https://restcountries.eu/rest/v2/name/${value}`)
//        .then(response => {
        
//          return response.json();
//        })
//          .then(data => {
//           maxCantry(data)
//          })
    
//        .catch(error => {
//           console.log(error,"Немає данних для відправки"); 
//        });
//  }
 
 
//  const maxCantry = ( data ) => {
   
//    if (data.length > 10) {
 
//     alert({
//        text: ' Акунаматата... Введіть більше символів для уточнення пошуку'
//      });
//       return refs.listPushCounries.innerHTML =" "; 
    
//    } if (data.length >= 2 && data.length <= 10) {
//       refs.listPushCounries.innerHTML =" "; 
    
//      renderMaxColection(data)
//      return  
     
//    } if (data.length === 1) {
 
//      resultCantry(data)
//      return
//    } 
//  }
 
 
//  function resultCantry(data) {
//    refs.listPushCounries.innerHTML = menuMrpTemplate(data); 
   
//  }
 
 
//  function creatElement({ name } ) {
   
//    const articleFirst = `<li class="list__cantry-item">${name}</li>`
 
//    refs.listPushCounries.innerHTML += articleFirst;
 
//  };
 
//  function renderMaxColection(array) {
//    array.forEach(el => creatElement(el));
 
//  }
 
//  refs.inputSearchCountry.addEventListener('input', debounce(hendlerSubmin, 1000));
