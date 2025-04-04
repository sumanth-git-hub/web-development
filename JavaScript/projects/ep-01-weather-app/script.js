const apiKey = "92eb6eb35af3edb6f4cfff2b7b170e82";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric";
const temperatureOfCity = document.querySelector('.temp');
const cityName = document.querySelector('.city');
const findHumidity = document.querySelector('.humidity');
const windSpeed = document.querySelector('.wind');
const searchInput = document.querySelector('.search input')
const searchButton = document.querySelector('.search button');
const climateIcons = document.querySelector('.weather-icon');
const weatherSection = document.querySelector('.weather');
const errorMessage = document.querySelector('.error')


async function checkWeather(city) {
    const response = await fetch(apiUrl + `&q=${city}` + `&appid=${apiKey}`);
    const data = await response.json();

    // if(data.cod == '404'){  // both works
    //     errorMessage.style.display = 'block'
    //     weatherSection.style.display = 'none'
    // }

     if(response.status === 404){  // both works
        errorMessage.style.display = 'block'
        weatherSection.style.display = 'none'
        console.log(response.status)
    }
    else {
        console.log('Hello World!!')
        console.log(data)
        cityName.innerHTML = data.name
        temperatureOfCity.innerHTML = Math.round(data.main.temp) + "°c"
        findHumidity.textContent = data.main.humidity + "%"
        windSpeed.textContent = data.wind.speed + " km/h"
    
        if(data.weather[0].main == 'Clouds'){
            climateIcons.src = 'images/clouds.png'
        }
        else if(data.weather[0].main == 'Rain'){
            climateIcons.src = 'images/rain.png'
        }
        else if(data.weather[0].main == 'Snow'){
            climateIcons.src = 'images/snow.png'
        }
        else if(data.weather[0].main == 'Drizzle'){
            climateIcons.src = 'images/drizzle.png'
        }
        else if(data.weather[0].main == 'Fog'){
            climateIcons.src = 'images/mist.png'
        }
        else if(data.weather[0].main == 'Clear'){
            climateIcons.src = 'images/clear.png'
        }
    
        weatherSection.style.display = 'block'
        errorMessage.style.display = 'none'
    }
   
}

searchButton.addEventListener('click', () => {
    checkWeather(searchInput.value)
    // weatherSection.style.display = 'block'
})