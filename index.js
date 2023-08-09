import {apiKey} from "/secrets.js"


const cityInput = document.getElementById('cityInput');
const fetchButton = document.getElementById('fetchButton');
const weatherInfo = document.getElementById('weatherInfo');

fetchButton.addEventListener('click', () => {
  const cityName = cityInput.value;
  if (cityName !== '') {
    fetchWeatherData(cityName);
  }
});

function fetchWeatherData(cityName) {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`; // Added units for Celsius
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      displayWeatherData(data);
    })
    .catch(error => {
      console.log('Error fetching weather data:', error);
      weatherInfo.innerHTML = 'Error fetching weather data. Please try again later.';
    });
}

function displayWeatherData(data) {
  const { name, main, weather } = data;
  const temperature = main.temp;
  const description = weather[0].description;
  const iconCode = weather[0].icon;
  const weatherHTML = `
    <h2>Weather in ${name}</h2>
    <p>${description}</p>
    <p>Temperature: ${temperature}°C</p>
    <img src="http://openweathermap.org/img/wn/${iconCode}.png" alt="${description}">
  `;
  weatherInfo.innerHTML = weatherHTML;
}
