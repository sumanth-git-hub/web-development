const  newsSection = document.querySelector(".news-section");
let apiUrl = 'https://newsapi.org/v2/top-headlines?' +
          'country=us&' +
          'apiKey=b96264afa79d40088508f090a2277cca';


fetch(apiUrl)
.then((res) =>  res.json())
.then((passNews) => {
    console.log(passNews.articles[1])
    console.log(passNews.articles[1].description)
    console.log(passNews.articles[1].publishedAt)
    console.log(passNews.articles[1].url)
    console.log(passNews.articles[1].urlToImage)

    let newsCount = passNews.articles.length;
    // console.log(newsCount);

    for (let index = 0; index < newsCount; ++index) {
        const element = passNews.articles[index];
        // console.log(element)
        const newsSnippets = document.createElement('div');
        newsSnippets.innerHTML = `<article class="news-snippet">
                <p class="publication-date"><span><i class="fa-solid fa-calendar-days"></i></span>${passNews.articles[index].publishedAt}</p>
                <h3 class="news-heading">${passNews.articles[index].title}</h3>
                <div class="flex-layout">
                <div class="img-section">
                    <img src="${passNews.articles[index].urlToImage}">
                </div>
                <div class="content-section">
                <p class="news-description">${passNews.articles[index].content}</p>
                <p class="cta-button"><a href="${passNews.articles[index].url}" target="_blank" rel="nofollow">Read more</a><span><i class="fa-solid fa-arrow-up-right-from-square"></i></span></p>
                </div>
                </div>
            </article>`
            newsSection.appendChild(newsSnippets);
    }
           
}).catch((error) => {
    console.log(error)
})


