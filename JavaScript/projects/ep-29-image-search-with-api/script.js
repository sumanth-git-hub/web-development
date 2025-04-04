const accessKey = `6OBTdBw_RYoh02TXhcS-uRX1p_o32Wxl0rynuFfbtpo`;
const searchField = document.getElementById("search-input");
const formSection = document.getElementById("form-section");
const searchResults = document.getElementById("search-results");
const loadMoreButton =document.getElementById("load-more-button");
let query = "";
let page = 1;

async function randomImages() {
    try {
        const apiUrl = `https://api.unsplash.com/search/photos?page=${page}&query=random&client_id=${accessKey}&per_page=30`;
        const response = await fetch(apiUrl);
        const showData = await response.json();
        const randomResults =  showData.results
        console.log(randomResults);

        randomResults.forEach(imageSet => {
            const imageContainer = document.createElement("img");
           imageContainer.src = imageSet.urls.small;
           const sourcePage = document.createElement("a");
           sourcePage.href = imageSet.links.html;
           sourcePage.target = "_blank";
           sourcePage.appendChild(imageContainer);
           searchResults.appendChild(sourcePage);
        });

    } catch (error) {
        console.log("Error by fetching the random images from API")
    }
}


// function imageComponent(imageSet) {
//     const imageContainer = document.createElement("img");
//            imageContainer.src = imageSet.urls.small;
//            const sourcePage = document.createElement("a");
//            sourcePage.href = imageSet.links.html;
//            sourcePage.target = "_blank";
//            sourcePage.appendChild(imageContainer);
//            searchResults.appendChild(sourcePage);
// }
randomImages();

//all about displaying the images based on the search
async function findImages() {
    try {
        query = searchField.value;
        const apiUrl = `https://api.unsplash.com/search/photos?page=${page}&query=${query}&client_id=${accessKey}&per_page=12`;
        const response = await fetch(apiUrl);
        const data  = await response.json();
        const ImageResults = data.results;
        console.log(ImageResults);

        if(page === 1){  // to display the current search term results in the top & clear the old results
            searchResults.innerHTML = ""
            console.log(searchResults)
        }

        ImageResults.forEach(imageSet => {
           const imageContainer = document.createElement("img");
           imageContainer.src = imageSet.urls.small;
           const sourcePage = document.createElement("a");
           sourcePage.href = imageSet.links.html;
           sourcePage.target = "_blank";
           sourcePage.appendChild(imageContainer);
           searchResults.appendChild(sourcePage);
        });
        
    } catch (error) {
        console.log("Error by fetching the Image API")
    }
}


formSection.addEventListener("submit", (e) => {
    e.preventDefault();
    page = 1; // to display current search term results in the top 
    findImages();
    loadMoreButton.style.display = "block";
});

loadMoreButton.addEventListener("click", (e) => {
    page++;
    findImages();
})

//urls.small image
//links.html for source