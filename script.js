const apikey = "6fd7e0b0ceb700135dbbc4441c931860";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");


async function checkweather(city) {
    const response = await fetch(apiurl + city + `&appid=${apikey}`);
    const data = await response.json();
    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".Humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if(data.weather[0].main == "Clouds") {
        weatherIcon.src ="images/clouds.png"
    }
    else if(data.weather[0].main == "Rain") {
        weatherIcon.src ="images/rain.png"
    }
    else if(data.weather[0].main == "Drizzle") {
        weatherIcon.src ="images/drizzle.png"
    }
    else if(data.weather[0].main == "Mist") {
        weatherIcon.src ="images/mist.png"
    }
    else if(data.weather[0].main == "Clear") {
        weatherIcon.src ="images/clear.png"
    }
    
    document.querySelector(".weather").style.display = "block";
    
}

searchBtn.addEventListener("click" ,()=>{
    checkweather(searchBox.value);
} );

checkweather();
