//global variables
var searchCityEl = document.getElementById("searchCity");
var cityHeadingEl = document.querySelector(".cityNameDate");
var apiKey = "&appid=b1753ec59a219420447810a8ba1a0092";

var searchedCities = JSON.parse(localStorage.getItem('searchedCities')) || [];
