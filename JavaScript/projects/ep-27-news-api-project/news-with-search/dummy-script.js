const newsContainer = document.querySelector(".news-section");
apiKey = "b96264afa79d40088508f090a2277cca"

 async function fetchRandomNews(){
    try {
        const apiURL = `https://newsapi.org/v2/top-headlines?country=us&pageSize=30&apiKey=${apiKey}`
        const response = await fetch(apiURL)
        const data = await response.json();
        console.log(data.articles)
        return data.articles
    } catch (error) {
        console.log("Error by fetching news", error)
        return []
    }
}

(async () => {
    try {
        const articles = await fetchRandomNews()
        displayBlogs(articles)
        console.log(displayBlogs)
    } catch (error) {
        console.log("Error by fetching news", error)
    }
})();

function displayBlogs(articles) {
    newsContainer.innerHTML = "";
    articles.forEach((article) => {
        const newsSnippet = document.createElement("div")
        newsSnippet.classList.add("news-snippet");
        const dateOfPublish = document.createElement("p")
        dateOfPublish.classList.add("publication-date");
        dateOfPublish.innerHTML = `<span><i class="fa-solid fa-calendar-days"></i></span><span>${article.publishedAt}</span>`
        const newsHeadlines = document.createElement("h3")
        newsHeadlines.classList.add("news-heading");
        newsHeadlines.textContent = article.title;

        const flexLayOut = document.createElement("div");
        flexLayOut.classList.add("flex-layout")
        const imageSection = document.createElement("div");
        imageSection.classList.add("img-section");
        const newsImage = document.createElement("img");
        // newsImage.src = article.urlToImage;
        newsImage.alt = "News Image";
        const fixImage = article.urlToImage === null ? "/projects/ep-27-news-api/news-with-search/images/visit-website-img.png" : article.urlToImage
        newsImage.src = fixImage;
        const contentSection = document.createElement("div");
        contentSection.classList.add("content-section");
        const newsDescription = document.createElement("p");
        newsDescription.classList.add("news-description");
        // newsDescription.innerText = article.description;
       
         //here
        const showDescription = article.description === null? "Sorry for the inconvenience! Kindly click on the read more to get the detailed news": article.description;
        newsDescription.innerText = showDescription;

        const createLineBreak = document.createElement("br");
        const readMoreButton = document.createElement("div");
        readMoreButton.classList.add("cta-button");
        readMoreButton.innerHTML = `<p class="cta-button"><a href="${article.url} target"_blank" rel="nofollow">Read more</a><span><i class="fa-solid fa-arrow-up-right-from-square"></i></span></p>`

                        newsContainer.append(newsSnippet);
                        newsSnippet.append(dateOfPublish);
                        newsSnippet.append(newsHeadlines);
                        newsSnippet.append(flexLayOut);
                        flexLayOut.append(imageSection);
                        imageSection.append(newsImage);
                        flexLayOut.append(contentSection);
                        contentSection.append(newsDescription);
                        contentSection.append(createLineBreak);
                        contentSection.append(readMoreButton);
    });
};

// query based result showing feature

const searchInput = document.getElementById("find-query");
const submitButton = document.querySelector(".submit-button");

submitButton.addEventListener("click", async (e) => {
    e.preventDefault();
    let query = searchInput.value.trim();
    if(query !== ""){
        try {
            const articles = await fetchNewsQuery(query);
            displayBlogs(articles)
        } catch (error) {
            console.log("Error fetching news by query")
        }
    }
    searchInput.value = ""
});

async function fetchNewsQuery(query) {
    try {
        const apiURL = `https://newsapi.org/v2/everything?q=${query}&apiKey=${apiKey}`
        const response = await fetch(apiURL)
        const data = await response.json();
        console.log(data.articles)
        return data.articles
    } catch (error) {
        console.log("Error by fetching news", error);
        return []
    }
}