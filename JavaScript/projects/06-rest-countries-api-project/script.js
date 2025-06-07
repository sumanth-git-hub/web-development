const countriesContainer = document.querySelector(".countries-card-container");
const filterByRegion = document.querySelector(".filter-by-region");
let allCountriesData // created this variable to implement the search feature
const searchInput = document.querySelector('.search-container input')
const themeChanger = document.querySelector('.theme-changer')

// fetch("https://restcountries.com/v3.1/all")  //the API is not working after few days of the project however the data listed in the json file is copied in and running the same in local json file
fetch("/JavaScript/projects/06-rest-countries-api-project/countrydata.json")
  .then((res) => res.json())
  .then((countriesData) => {
    renderCountries(countriesData); // the below commented code is written on below function to avoid code repetition 'renderCountries' is the function that getting call back from here
    allCountriesData = countriesData  // for search feature
    //     countriesContainer.innerHTML = ''  // this is helped to remove the existing cards

    //     countriesData.forEach(country => {
    //         console.log(country.name)
    //         // console.log('The capital is: ',country.languages)
    //         const countryCard = document.createElement('a')
    //         // console.log(countryCard)
    // countryCard.classList.add('countries-list')
    // countryCard.href = `./country.html?name=${country.name.common}`
    // countryCard.innerHTML = `<img src="${country.flags.svg}" alt="${country.name.common} flag">
    //                 <div class="text-content">
    //                     <h3>${country.name.common}</h3>
    //                     <p><b>Population: </b>${country.population.toLocaleString('en-IN')}</p>
    //                     <p><b>Region: </b>${country.region}</p>
    //                     <p><b>Capital: </b>${country.capital}</p>
    //                 </div>`
    // countriesContainer.append(countryCard)
    //    });
  });

filterByRegion.addEventListener("change", (event) => {
  fetch(`https://restcountries.com/v3.1/region/${filterByRegion.value}`)
    .then((res) => res.json())
    .then((countriesData) => {
      renderCountries(countriesData); 
     // the below commented code is written on below function to avoid code repetition 'renderCountries' is the function that getting call back from here

      //     countriesContainer.innerHTML = ''  // this is helped to remove the existing cards
      //     countriesData.forEach(country => {
      //         console.log(country.name)
      //         // console.log('The capital is: ',country.languages)
      //         const countryCard = document.createElement('a')
      //         // console.log(countryCard)
      // countryCard.classList.add('countries-list')
      // countryCard.href = `./country.html?name=${country.name.common}`
      // countryCard.innerHTML = `<img src="${country.flags.svg}" alt="${country.name.common} flag">
      //                 <div class="text-content">
      //                     <h3>${country.name.common}</h3>
      //                     <p><b>Population: </b>${country.population.toLocaleString('en-IN')}</p>
      //                     <p><b>Region: </b>${country.region}</p>
      //                     <p><b>Capital: </b>${country.capital}</p>
      //                 </div>`
      // countriesContainer.append(countryCard)
      //    });
    });
});

function renderCountries(countriesData) {
  countriesContainer.innerHTML = ""; // this is helped to remove the existing cards

  countriesData.forEach((country) => {
    // console.log(country.name);
    // console.log('The capital is: ',country.languages)
    const countryCard = document.createElement("a");
    // console.log(countryCard)
    countryCard.classList.add("countries-list");
    countryCard.href = `./country.html?name=${country.name.common}`;
    countryCard.innerHTML = `<img src="${country.flags.svg}" alt="${
      country.name.common
    } flag">  
                <div class="text-content">
                    <h3>${country.name.common}</h3>
                    <p><b>Population: </b>${country.population.toLocaleString(
                      "en-IN"
                    )}</p>
                    <p><b>Region: </b>${country.region}</p>
                    <p><b>Capital: </b>${country.capital}</p>
                </div>`;
    countriesContainer.append(countryCard);
  });
}

searchInput.addEventListener('input', (e) => {
    // console.log(searchInput.value)
    // console.log(allCountriesData)
  const displayFilterValue =  allCountriesData.filter((filterCountry) => filterCountry.name.common.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()))
  renderCountries(displayFilterValue)
})

// function darkMode() {
//     document.querySelector('body').classList.toggle('dark-mode')
// }



// const darkMode = document.querySelector('.dark-mode')

// darkMode.style.backgroundColor = localStorage.getItem('turnDark')


let themeSwitch = localStorage.getItem('switch-to-dark-mode');


let changeTheme = localStorage.getItem("switch-themes");

themeChanger.addEventListener("click", (e) => {
  changeTheme = localStorage.getItem("switch-themes");
  if(changeTheme !== "active"){
    enableDarkMode();
    console.log("say Yes")
  }
  else {
    disableDarkMode();
    console.log("say No")
  }
})

function enableDarkMode() {
  localStorage.setItem("switch-themes", "active");
  document.body.classList.add("dark-mode")
  themeChanger.children[1].innerText = " Light Mode"
  themeChanger.children[0].classList.remove("fa-moon");
  themeChanger.children[0].classList.add("fa-sun");

}
if(changeTheme === "active")enableDarkMode();
function disableDarkMode() {
  localStorage.setItem("switch-themes", null);
  document.body.classList.remove("dark-mode")
  themeChanger.children[1].innerText = " Dark Mode"
  themeChanger.children[0].classList.add("fa-moon");
  themeChanger.children[0].classList.remove("fa-sun");
}

/*
let themeSwitch = localStorage.getItem('switch-to-dark-mode');

themeChanger.addEventListener("click", () => {
  themeSwitch = localStorage.getItem('switch-to-dark-mode');
if(themeSwitch !== "active"){
  enableDarkMode();
  console.log("Say yes")
}
else {
  disableDarkMode();
  console.log("Say no")
}
})


function enableDarkMode() {
localStorage.setItem("switch-to-dark-mode", "active")
document.body.classList.add("dark-mode");
// document.querySelector('body').classList.add('dark-mode');
}
if(themeSwitch === "active")enableDarkMode();

function disableDarkMode() {
// document.querySelector('body').classList.remove('dark-mode');
document.body.classList.remove("dark-mode");
localStorage.setItem("switch-to-dark-mode", null)
}
*/