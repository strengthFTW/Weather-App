const apikey = "6fd7e0b0ceb700135dbbc4441c931860";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const windIcon = document.querySelector(".wind-icon"); // New element for wind icon

async function checkweather(city) {
    const response = await fetch(apiurl + city + `&appid=${apikey}`);
    const data = await response.json();
    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".Humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    // Use the weather icon code provided by OpenWeather
    const iconCode = data.weather[0].icon;
    weatherIcon.src = `http://openweathermap.org/img/wn/${iconCode}.png`; // Dynamically set weather icon

    // Optionally, set the wind icon if desired
    const windIconCode = "wind"; // You can customize this based on your icons
    windIcon.src = `path_to_your_images/${windIconCode}.png`; // Set wind icon dynamically if required

    // Show weather information
    document.querySelector(".weather").style.display = "block";
}

searchBtn.addEventListener("click", () => {
    checkweather(searchBox.value);
});

// Optionally, you can add a default city check when the page loads (if required).
// checkweather('London');
