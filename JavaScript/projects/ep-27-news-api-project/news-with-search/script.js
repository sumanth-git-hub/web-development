const apiKey = "b96264afa79d40088508f090a2277cca";
const newsContainer = document.querySelector(".news-section");
const searchInput = document.getElementById("find-query");
const submitButton = document.querySelector(".submit-button");

// passing the random news
async function fetchRandomNews() {
    try {
       const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&pageSize=30&apiKey=${apiKey}`
       const response = await fetch(apiUrl)
       const data = await response.json()
       console.log(data)
       return data.articles;
    } catch (error) {
        console.error("Error fetching random news", error);
        return []
    }
}

(async () => {
    try {
     const articles = await fetchRandomNews()
     displayBlogs(articles);
    } catch (error) {
        console.error("Error fetching random news", error);
    }
})();

function displayBlogs(articles) {
    newsContainer.innerHTML = ""
    articles.forEach((article) => {
        const newsSnippet = document.createElement("div")
        newsSnippet.classList.add("news-snippet");
        const dateOfPublish = document.createElement("p")
        dateOfPublish.classList.add("publication-date");
        dateOfPublish.innerHTML = `<span><i class="fa-solid fa-calendar-days"></i></span><span>${article.publishedAt}</span>`
        const newsHeadlines = document.createElement("h3")
        newsHeadlines.classList.add("news-heading");
        newsHeadlines.textContent = article.title;
        /*
        //this term we used to truncate the title after meeting the character limit
        const truncatedTitle = article.title.length > 60? article.title.slice(0, 60) + "....": article.title
        newsHeadlines.textContent = truncatedTitle;
        */
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
}


// query based result showing feature

let query = searchInput.value.trim();

submitButton.addEventListener("click", async (e) => {
    e.preventDefault(); // this plays the major role after the query submission
        query = searchInput.value.trim();
        console.log(query);
        if (query !== "") {
            try {
                const articles = await fetchNewsQuery(query);
                displayBlogs(articles);
                console.log(articles);
            } catch (error) {
                console.log("Error fetching news by query", error);
            }
        }
        searchInput.value = ""  // used to remove the search input from the input bar after the call
    })
    
    async function fetchNewsQuery(query) {
    // console.log("Say Hello")
    try {
       const apiUrl = `https://newsapi.org/v2/everything?q=${query}&apiKey=${apiKey}`
       const response = await fetch(apiUrl);
       const data = await response.json();
       console.log(data)
       return data.articles;
    } catch (error) {
        console.error("Error fetching random news", error);
        return []
    }
}

