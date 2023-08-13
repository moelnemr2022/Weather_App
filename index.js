import { apiKey } from "/secrets.js";

const cityInput = document.getElementById('cityInput');
const fetchButton = document.getElementById('fetchButton');
const weatherInfo = document.getElementById('weatherInfo');
const history = [];

fetchButton.addEventListener('click', () => {
  const cityName = cityInput.value;
  if (cityName !== '') {
    fetchWeatherData(cityName);
  }
});

async function fetchWeatherData(cityName) {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    displayWeatherData(data);

    history.unshift(cityName); // Adding to the beginning of the history
    showHistory();
  } catch (error) {
    console.log('Error fetching weather data:', error);
    weatherInfo.innerHTML = 'Error fetching weather data. Please try again later!';
  }
}

function showHistory() {
  const searchHistory = document.getElementById('searchHistory');
  searchHistory.innerHTML = history.map((city, i) =>
    `<li>${city}
      <button class="delete" data-index="${i}">X</button>
    </li>`
  ).join(''); // Join the array of history items to remove the commas

  const deleteButton = document.querySelectorAll('.delete');
  deleteButton.forEach((button) => {
    button.addEventListener("click", (e) => {
      const index = parseInt(e.target.getAttribute('data-index'));
      deleteHistory(index);
    });
  });
}

function deleteHistory(index) {
  history.splice(index, 1);
  showHistory();
}

const weatherHistoryList = document.getElementById('weatherHistory');

function displayWeatherData(data) {
  try {
    const { name, main, weather } = data;
    const temperature = main.temp;
    const description = weather[0].description;
    const iconCode = weather[0].icon;

    const listItem = document.createElement('li');
    listItem.innerHTML = `
      <h2>Weather in ${name}</h2>
      <p>${description}</p>
      <p>Temperature: ${temperature}°C</p>
      <img src="http://openweathermap.org/img/wn/${iconCode}.png" alt="${description}">`;
    
      // Clear the weather history list before adding a new item
      weatherHistoryList.innerHTML = '';
    weatherHistoryList.appendChild(listItem);

    cityInput.value = '';
  } catch (error) {
    console.log(error);
  }
}

