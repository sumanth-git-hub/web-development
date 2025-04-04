// const countryName = new URLSearchParams(window.location.search);  // getting the data from query string
// const myParam = countryName.get('name');
// console.log(myParam)

// const countryName = new URLSearchParams(window.location.search).get('name');  // getting the data from query string
// console.log(countryName)

// fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
// .then(res => res.json())
// .then((displayData) => {
//     console.log(displayData[0])
// })

const fetchCountryName = new URLSearchParams(location.search).get("name");
console.log(fetchCountryName);
const flagImage = document.querySelector(".country-container img");
const pageTitle = document.querySelector(".title-of-the-page");
const nativeName = document.querySelector(".native-name");
const populationOfCountry = document.querySelector(".country-population");
const regionOfTheCountry = document.querySelector(".country-region");
const subRegion = document.querySelector(".sub-region");
const countryCapital = document.querySelector(".country-capital");
const countryCurrencies = document.querySelector(".currencies");
const topLevelDomain = document.querySelector(".top-level-domain");
const languages = document.querySelector(".languages");
const borderCountriesSection = document.querySelector(".border-countries-section");
const backButton = document.querySelector('.back-button')
const switchTheme = document.querySelector('.theme-switch')

fetch(`https://restcountries.com/v3.1/name/${fetchCountryName}?fullText=true`)
  .then((res) => res.json())
  .then(([displayData]) => {
    // with the help of destructuring we avoid the displayData.[0]
    console.log(displayData);
    flagImage.src = displayData.flags.svg;
    flagImage.alt = `${displayData.name.common} flag`;
    pageTitle.textContent = displayData.name.common;
    if (displayData.name.nativeName) {
      // displayData.name.nativeName
      nativeName.textContent = Object.values(
        displayData.name.nativeName
      )[0].common;
    } else {
      nativeName.textContent = displayData.name.common;
    }
    populationOfCountry.textContent =
      displayData.population.toLocaleString("en-IN");
    regionOfTheCountry.textContent = displayData.region;
    if (displayData.subregion) {
      subRegion.textContent = displayData.subregion;
    } else {
      subRegion.textContent = "not available";
    }
    if (displayData.capital) {
      countryCapital.textContent = displayData.capital.join(", "); //displayData.capital array
    } else {
      countryCapital.textContent = "not available";
    }
    if (displayData.currencies) {
      // displayData.currencies is an object
      countryCurrencies.textContent = Object.values(displayData.currencies)
        .map((currency) => currency.name)
        .join(", ");
    } else {
      countryCurrencies.textContent = "not available";
    }
    topLevelDomain.textContent = displayData.tld.join(", "); // displayData.tld is an array
    if (displayData.languages) {
      languages.textContent = Object.values(displayData.languages).join(", "); //displayData.languages is an object
    } else {
      languages.textContent = "not available";
    }

    if (displayData.borders) {
      displayData.borders.forEach((borderCode) => {
        // console.log(borderCode);
        fetch(`https://restcountries.com/v3.1/alpha/${borderCode}`)
          .then((res) => res.json())
          .then(([extractCode]) => {
            // console.log(extractCode.name.common)
            const borderCountryTag = document.createElement("a");
            borderCountryTag.textContent = extractCode.name.common;
            borderCountryTag.href = `./country.html?name=${extractCode.name.common}`
            // borderCountryTag.target = '_blank' // to implement the back button paused this new tab option
            console.log(borderCountryTag);

            borderCountriesSection.append(borderCountryTag);
          });
      });
    }
  });


  let themeSwitch = localStorage.getItem('switch-dark');

  switchTheme.addEventListener('click', () => {
    themeSwitch = localStorage.getItem('switch-dark');
  if(themeSwitch !== "active"){
    enableDarkMode();
    console.log("Say yes")
    switchTheme.children[1].innerText = " Light Mode"
    switchTheme.children[0].classList.add("fa-sun")
    switchTheme.children[0].classList.remove("fa-moon")
  }
  else {
    disableDarkMode();
    console.log("Say no")
    switchTheme.children[1].innerText = " Dark Mode"
    switchTheme.children[0].classList.remove("fa-sun")
    switchTheme.children[0].classList.add("fa-moon")
  }
  })


function enableDarkMode() {
  localStorage.setItem("switch-dark", "active")
  document.querySelector('body').classList.add('dark-mode');
}
if(themeSwitch === "active")enableDarkMode()

function disableDarkMode() {
  document.querySelector('body').classList.remove('dark-mode');
  localStorage.setItem("switch-dark", null)
}
  