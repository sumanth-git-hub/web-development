const apiId = "92eb6eb35af3edb6f4cfff2b7b170e82";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric";
const temperatureOfCity = document.querySelector(".temp");
const cityName = document.querySelector(".city");
const findHumidity = document.querySelector(".humidity");
const windSpeed = document.querySelector(".wind");
const searchInput = document.querySelector(".search input");
const searchButton = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const weatherSection = document.querySelector(".weather");
const errorMessage = document.querySelector(".error");

async function checkWeather(city) {
  const response = await fetch(apiUrl + `&q=${city}` + `&appid=${apiId}`);
  const data = await response.json();
  console.log(data);

  if (response.status == 404) {
    errorMessage.style.display = "block";
    weatherSection.style.display = "none";
  } else {
    temperatureOfCity.textContent = Math.round(data.main.temp) + "°c";
    cityName.innerText = data.name;
    findHumidity.textContent = data.main.humidity + "%";
    windSpeed.textContent = data.wind.speed + " km/h";

    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "images/clouds.png";
    } else if (data.weather[0].main == "Snow") {
      weatherIcon.src = "images/snow.png";
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "images/rain.png";
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.src = "images/mist.png";
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "images/drizzle.png";
    } else if (data.weather[0].main == "Clear") {
      weatherIcon.src = "images/clear.png";
    }

    console.log(data.weather[0].main);

    weatherSection.style.display = "block";
    errorMessage.style.display = "none";
  }
}

searchButton.addEventListener("click", () => {
  checkWeather(searchInput.value);
});
