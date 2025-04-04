
const apiUrl = 'https://dummyjson.com/quotes/random';
const quoteElement = document.querySelector('.quote-element');
const authorElement = document.querySelector('.author-element');
const generateQuoteButton = document.getElementById('quote-button');
const twitterShare = document.querySelector('.share-button');

async function fetchQuotes(url) {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    quoteElement.innerText = data.quote;
    authorElement.innerText = data.author;
}
fetchQuotes(apiUrl);

generateQuoteButton.addEventListener('click', () => {
    fetchQuotes(apiUrl);
})

function tweet() {
    window.open('https://twitter.com/intent/tweet?text=' + quoteElement.innerText + ' ---- by ' + authorElement.innerText , "Tweet window", "width=600, height= 300")
}

twitterShare.addEventListener('click', () => {
    tweet()
})