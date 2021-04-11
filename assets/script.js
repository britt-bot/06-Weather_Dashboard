search for a city:
search bar
search button

list of cities

current forecast
city (date) icon
temp:
humidity:
wind speed:
uv index:

5-Day Forecast
5 cards
date
icon
temp:
humidity:



var lat = "";
var lon = "";
var units = "";
exclude = alerts

var cityName = "";
var currentDate = "";
var icon = "";
var temperature = "";
var humidity = "";
var windSpeed = "";
var uvIndex = "";

var fiveDay = "";
var fiveDayCurrent = "";
var fiveDayForecast = "";
var searchResults = "";


var forecastEndPoint = "https://api.openweathermap.org/data/2.5/forecast/daily?q={city name}&cnt={cnt}&appid={API key}";
var currentWeather = "https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}";
var oneCall = "https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}";
var apiKey = "b2da1b50adad35d702bdf58950746939";

var cityList = document.querySelector('ul');
var searchButton = document.getElementById('search-button');
function getApi() {
    // replace `octocat` with anyone else's GitHub username
    var requestUrl = 'https://api.github.com/users/octocat/repos';
  
    fetch(requestUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        for (var i = 0; i < data.length; i++) {
          var listItem = document.createElement('li');
          listItem.textContent = data[i].html_url;
          cityList.appendChild(listItem);
        }
      });
  }
  
  searchButton.addEventListener('click', getApi);
  





// //Pulls previous searches 
// function allStorage() {
//     var values = [],
//         keys = Object.keys(localStorage),
//         i = keys.length;
//     while ( i-- ) {
//         values.push( localStorage.getItem(keys[i]));
//     }
//     for (j = 0; j < values.length; j++) {
//         $(".prev-list").prepend("<button class='prev-city mt-1'>" + values[j] + "</button>");
//     }
// }
// allStorage();

// //Clears local storage and previous searches
// $(".clear").on("click", function() {
//     localStorage.clear();
//     $(".prev-city").remove();
// });



// //Search previous searches when city clicked on
// $(document).on("click", ".prev-city", function() {
//     var subject = $(this).text();
//     $(".subject").val(subject);
//     $(".search").click();
//     $(this).remove();
// });

