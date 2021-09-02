import './sass/main.scss';
const fetchPostsBtn = document.querySelector(".btn");
const userList = document.querySelector(".posts");

fetchPostsBtn.addEventListener("click", () => {
  fetchPosts()
    .then((posts) => renderPosts(posts))
    .catch((error) => console.log(error));
});

function fetchPosts() {
  // Change the number of items in the group here  
  return fetch("https://pixabay.com/api/?key=23206361-11fddcc9c6397c9794392b9fa&q=yellow+flowers&image_type=photo&per_page=3").then(
    (response) => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    }
  );
}

function renderPosts(posts) {
  const markup = posts
    .map(({ webformatURL, likes, views, comments, downloads }) => {
      return `<li>
          <div class="photo-card">
  <img src="${webformatURL}" alt="" width = "400"/>

  <div class="stats">
    <p class="stats-item">
      <i class="material-icons">thumb_up</i>
      ${likes}
    </p>
    <p class="stats-item">
      <i class="material-icons">visibility</i>
      ${views}
    </p>
    <p class="stats-item">
      <i class="material-icons">comment</i>
      ${comments}
    </p>
    <p class="stats-item">
      <i class="material-icons">cloud_download</i>
      ${downloads}
    </p>
  </div>
</div>
        </li>`
    })
    .join("");
  userList.innerHTML = markup;
}

// const fetchPostsBtn = document.querySelector(".btn");
// const userList = document.querySelector(".posts");

// fetchPostsBtn.addEventListener("click", () => {
//   fetchPosts()
//     .then((posts) => renderPosts(posts))
//     .catch((error) => console.log(error));
// });

// let per_page = 10;
// let page = 1;

// function fetchPosts() {
//   const params = new URLSearchParams({
//     per_page: per_page,
//     // Change the group number here
//     page: page
//   });

//   return fetch(`https://pixabay.com/api/?key=23206361-11fddcc9c6397c9794392b9fa&q=yellow+flowers&image_type=photo&${params}`).then(
//     (response) => {
//       if (!response.ok) {
//         throw new Error(response.status);
//       }
//       return response.json();
//     }
//   );
// }

// function renderPosts(posts) {
//   const markup = posts
//     .map(({ webformatURL, likes, views, comments, downloads }) => {
//       return `<li>
//           <div class="photo-card">
//   <img src="${webformatURL}" alt="" width = "400"/>

//   <div class="stats">
//     <p class="stats-item">
//       <i class="material-icons">thumb_up</i>
//       ${likes}
//     </p>
//     <p class="stats-item">
//       <i class="material-icons">visibility</i>
//       ${views}
//     </p>
//     <p class="stats-item">
//       <i class="material-icons">comment</i>
//       ${comments}
//     </p>
//     <p class="stats-item">
//       <i class="material-icons">cloud_download</i>
//       ${downloads}
//     </p>
//   </div>
// </div>
//         </li>`
//     })
//     .join("");
//   userList.innerHTML = markup;
// }

// const options = {
// headers: {
//   Autorization : '23206361-11fddcc9c6397c9794392b9fa'
// }
// };

fetch('https://pixabay.com/api/?key=23206361-11fddcc9c6397c9794392b9fa&q=yellow+flowers&image_type=photo&per_page=3').then(r => r.json()).then(console.log)