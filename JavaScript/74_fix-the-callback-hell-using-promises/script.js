// // let userData
const displayImage = document.querySelector("img");
const clickButton = document.querySelector("body > button");
const placeEmailId = document.querySelector('.email-id')

clickButton.addEventListener("click", () => {
function makeHttpRequest(method, url) {
  const xhr = new XMLHttpRequest();
  
    xhr.responseType = "json";

    const newProm = new Promise((resolve, reject) => {
      
      xhr.addEventListener("load", () => {
        // console.log(xhr.response);
        resolve(xhr.response);
      });
      xhr.addEventListener("error", () => {
        reject('Request Failed')
      });
    })

    xhr.open(method, url);
    xhr.send();
    // console.log(newProm)
    return newProm
    
}

/*
makeHttpRequest('Get', `https://dummyjson.com/users`)
.then((usersData) => {return makeHttpRequest('GET', `https://dummyjson.com/posts/user/${usersData.users[0].id}`)})
.then((postsData) => {return  makeHttpRequest('GET', `https://dummyjson.com/comments/post/${postsData.posts[0].id}`)})
.then((commentsData) => {return makeHttpRequest('GET', `https://dummyjson.com/users/${commentsData.comments[0].user.id}`)})
.then((userData) => {
  placeEmailId.textContent = userData.email;
  console.log(userData)})
.catch((error) => {console.log(error)});
*/

makeHttpRequest('Get', `https://dummyjson.com/users`)
.then((usersData) => makeHttpRequest('GET', `https://dummyjson.com/posts/user/${usersData.users[0].id}`))
.then((postsData) => makeHttpRequest('GET', `https://dummyjson.com/comments/post/${postsData.posts[0].id}`))
.then((commentsData) => makeHttpRequest('GET', `https://dummyjson.com/users/${commentsData.comments[0].user.id}`))
.then((userData) => {
  placeEmailId.textContent = userData.email;
  console.log(userData)})
.catch((error) => {console.log(error)});



// looks good in appearance (guru's code)
// makeHttpRequest('GET', 'https://dummyjson.com/users', (usersData) => {
//   makeHttpRequest('GET', `https://dummyjson.com/posts/user/${usersData.users[0].id}`, (postsData) => {
//     makeHttpRequest('GET', `https://dummyjson.com/comments/post/${postsData.posts[0].id}`, (commentsData) => {
//       makeHttpRequest('GET', `https://dummyjson.com/users/${commentsData.comments[0].user.id}`, (userData) => {
//         console.log(userData);
//       });
//     });
//   });
// })


// for understanding better


// makeHttpRequest("GET", "https://dummyjson.com/users", (usersData) => {
//   console.log(usersData.users[0].id);
//   // console.log(data)
//   makeHttpRequest("GET",`https://dummyjson.com/posts/user/${usersData.users[0].id}`, (postData) => {  // get posts by user id
//       console.log(postData.posts[0].id);
//       makeHttpRequest('GET', `https://dummyjson.com/comments/post/${postData.posts[0].id}`, (commentsData) => {
//         console.log(commentsData.comments[0].user)
//         makeHttpRequest('GET', `https://dummyjson.com/users/${commentsData.comments[0].user.id}`, (finalUserData) => {
//           console.log(finalUserData.firstName)
//         })
//       })
//     }
//   );
// });


});





// makeHttpRequest("GET", "https://dummyjson.com/users/2")
