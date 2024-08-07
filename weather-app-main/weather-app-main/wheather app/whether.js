const apiKey = "1fedd8b0ca2eaaddf9837db0d98a7cde";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search i")
const weatherIcon = document.querySelector(".weather-icon")
async function checkWeather(city) {
    const Response = await fetch(apiUrl + city + `&appid=${apiKey}&units=metrics`);
    var data = await Response.json();
    console.log(data)
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = data.main.temp + 'kelvin';
    document.querySelector(".humidity").innerHTML = data.main.humidity + '%';
    document.querySelector(".wind").innerHTML = data.wind.speed + 'km/h';
    if (data.weather[0].main == "Clouds") {
        weatherIcon.src = "clouds.png"
    }
    if (data.weather[0].main == "Clear") {
        weatherIcon.src = "clear.png"
    }
    if (data.weather[0].main == "Rain") {
        weatherIcon.src = "rain.png"
    }
    if (data.weather[0].main == "Drizzle") {
        weatherIcon.src = "drizzle.png"
    }
    if (data.weather[0].main == "Mist") {
        weatherIcon.src = "mist.png"
    }
    document.querySelector(".weather").style.display = "block";
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
})




