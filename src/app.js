function getWeatherMunich(response) {
  console.log(response.data);
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
}

let apiKey = "99504b2dad7b6efc86f191546c548e5a";
let apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?q=munich&appid=" +
  apiKey +
  "&units=metric";

console.log(apiUrl);
axios.get(apiUrl).then(getWeatherMunich);
