//Feature 1 - Display current date and time

//let now = new Date();

//let h6 = document.querySelector("h6");

//let date = now.getDate();
//let hours = now.getHours();
//let minutes = now.getMinutes();
//let year = now.getFullYear();

//let days = [
//"Sunday",
// "Monday",
//"Tuesday",
//"Wednesday",
//"Thursday",
//"Friday",
//"Sat",
//];
//let day = days[now.getDay()];

//let months = [
//"January",
//  "February",
//"March",
// "April",
// "May",
// "June",
//"July",
//"August",
//"September",
//"October",
//"November",
//"December",
//];
//let month = months[now.getMonth()];

//h6.innerHTML = `${day} ${month} ${date}, ${year} ${hours}:${minutes}`;

// Feature 2 - Add a serch engine, display city name on the page when user submits
//function search(response) {
// response.preventDefault();
// let searchInput = document.querySelector("#search-text-input");
//let card = document.querySelector(".card-header");
// if (searchInput.value) {
//  card.innerHTML = `${searchInput.value}`;
//} else {
//card.innerHTML = null;
// alert(`Please type a city`);
// }
//}
//let form = document.querySelector("#find-city");
//form.addEventListener("submit", search);

// Feature 3 - Display fake temperature in Celsius and add a link to convert it to Farenheit
//function convertToFahrenheit(event) {
//event.preventDefault();
//let temperatureElement = document.querySelector("h4");
//temperatureElement.innerHTML = 66;
//}

//function convertToCelsius(event) {
//event.preventDefault();
// let temperatureElement = document.querySelector("h4");
//temperatureElement.innerHTML = 19;
//}
//let fahrenheitLink = document.querySelector("#fahrenheit-link");
//fahrenheitLink.addEventListener("click", convertToFahrenheit);

//let celsiusLink = document.querySelector("#celsius-link");
//celsiusLink.addEventListener("click", convertToCelsius);

// Week 5 Homework
function formatDate(date) {
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }

  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let dayIndex = date.getDay();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[dayIndex];
  return `${day} ${hours}:${minutes}`;
}
function displayWeather(response) {
  document.querySelector(".card-header").innerHTML = response.data.name;
  document.querySelector(".card-title").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector(".card-text").innerHTML =
    response.data.weather[0].main;
}

function searchInput(city) {
  let apiKey = "2fabf68687d905fa0708185a43ac4e4b";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeather);
}

function search(event) {
  event.preventDefault();
  let city = document.querySelector("#search-text-input").value;
  searchInput(city);
}
let dateElement = document.querySelector(".card-date");
let currentTime = new Date();
dateElement.innerHTML = formatDate(currentTime);

let searchForm = document.querySelector("#find-city");
searchForm.addEventListener("submit", search);

searchInput("Accra");
