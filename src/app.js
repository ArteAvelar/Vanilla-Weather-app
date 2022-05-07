function getWeatherMunich(response) {
  console.log(Math.round(response.data.main.temp));
}

let apiKey = "99504b2dad7b6efc86f191546c548e5a";
let apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?q=munich&appid=" +
  apiKey +
  "&units=metric";

console.log(apiUrl);
axios.get(apiUrl).then(getWeatherMunich);
