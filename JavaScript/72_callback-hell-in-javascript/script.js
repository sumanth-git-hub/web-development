// // let userData
const displayImage = document.querySelector("img");
const clickButton = document.querySelector("body > button");

clickButton.addEventListener("click", () => {
function makeHttpRequest(method, url, callback) {
  const xhr = new XMLHttpRequest();
  
    xhr.responseType = "json";
    xhr.addEventListener("load", () => {
      // console.log(xhr.response);
      callback(xhr.response);
    });

    xhr.open(method, url);
    xhr.send();
  
}

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


makeHttpRequest("GET", "https://dummyjson.com/users", (usersData) => {
  console.log(usersData.users[0].id);
  // console.log(data)
  makeHttpRequest("GET",`https://dummyjson.com/posts/user/${usersData.users[0].id}`, (postData) => {  // get posts by user id
      console.log(postData.posts[0].id);
      makeHttpRequest('GET', `https://dummyjson.com/comments/post/${postData.posts[0].id}`, (commentsData) => {
        console.log(commentsData.comments[0].user)
        makeHttpRequest('GET', `https://dummyjson.com/users/${commentsData.comments[0].user.id}`, (finalUserData) => {
          console.log(finalUserData.firstName)
        })
      })
    }
  );
});


});





// makeHttpRequest("GET", "https://dummyjson.com/users/2")
