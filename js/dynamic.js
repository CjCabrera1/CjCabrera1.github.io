var weatherData;
var api = 'https://api.openweathermap.org/data/2.5/weather?q=';
var city = "chicago;"
var apiKey = '&units=imperial&appid=9cc41f545ed6bc2c9eee27fb21e60b94'
function setup(){
createCanvas(500,500)
citySelect = createSelect();
citySelect.position(10,10);
citySelect.option("Chicago");
citySelect.option("New York")
citySelect.option("Houston");
citySelect.changed(changeCity);
}
function draw(){
background(0);
if (weatherData){
ellipse(width/2,height/2,weatherData.main.temp,weatherData.main.temp);
}
}
function gotWeatherData(data){
	weatherData = data;
	console.log(weatherData);
}
function changeCity(){
var weatherURL = api +  citySelect.value() +apiKey;
loadJSON(weatherURL,gotWeatherData);
}