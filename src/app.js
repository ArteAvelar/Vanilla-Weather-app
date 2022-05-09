function actualDate(formatTime) {
  let date = new Date(formatTime * 1000);

  let hours = date.getHours();
  if (hours < 10) {
    hours = "0" + hours;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  return day + " " + hours + ":" + minutes;
}

function getWeatherMunich(response) {
  celsiusdegrees = response.data.main.temp;
  let temperature = document.querySelector("#temperature");
  temperature.innerHTML = Math.round(response.data.main.temp);
  let city = document.querySelector("#city");
  city.innerHTML = response.data.name;
  let dailyCondition = document.querySelector("#daily-condition");
  dailyCondition.innerHTML = response.data.weather[0].description;
  let humidity = document.querySelector("#humidity");
  humidity.innerHTML = response.data.main.humidity;
  let windSpeed = document.querySelector("#windSpeed");
  windSpeed.innerHTML = Math.round(response.data.wind.speed);
  let date = document.querySelector("#date");
  date.innerHTML = actualDate(response.data.dt);

  let icon = document.querySelector("#icon");
  icon.setAttribute(
    "src",
    "http://openweathermap.org/img/wn/" +
      response.data.weather[0].icon +
      "@2x.png"
  );
  icon.setAttribute("alt", response.data.weather[0].description);
}

function search(city) {
  let apiKey = "99504b2dad7b6efc86f191546c548e5a";
  let apiUrl =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    "&appid=" +
    apiKey +
    "&units=metric";

  axios.get(apiUrl).then(getWeatherMunich);
}

function submitCity(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#city-search");
  search(cityInput.value);
}

function displayfarenheit(event) {
  event.preventDefault();
  let farenheitDegrees = (celsiusdegrees * 9) / 5 + 32;

  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(farenheitDegrees);
}

function displayCelsius(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(celsiusdegrees);
}

let celsiusdegrees = null;

let form = document.querySelector("#search-form");
form.addEventListener("submit", submitCity);

let farenheitTemp = document.querySelector("#farenheit-button");
farenheitTemp.addEventListener("click", displayfarenheit);

let celciusTemp = document.querySelector("#celsius-button");
celciusTemp.addEventListener("click", displayCelsius);

search("Munich");
