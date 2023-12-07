
const apikey = "3beeae71c3b2e9e87bff220e4c6cb1c8";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")
const weatherIcon = document.querySelector(".weather-icon")
const weathers = document.querySelector(".weather")
const error = document.querySelector(".error")
const input = document.getElementById("id")

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apikey}`);
   if(response.status == 404){
   error.style.display = "block"
   weathers.style.maxHeight = "0px"
}else{
    var data = await response.json();
   



    console.log(data); 

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "images/clouds.png";
    }
    else if(data.weather[0].main == "clear"){
        weatherIcon.src = "images/clear.png";
    }
    else if(data.weather[0].main == "drizzle"){
        weatherIcon.src = "images/drizzle.png";
    }
    else if(data.weather[0].main == "mist"){
        weatherIcon.src = "images/mist.png";
    }
    else if(data.weather[0].main == "rain"){
        weatherIcon.src = "images/rain.png";
    };

    weathers.style.maxHeight = "560px"
    error.style.display = "none"

}
}
   


input.onchange = function(){
    checkWeather(searchBox.value);
}
searchBtn.addEventListener("click", () =>{
    checkWeather(searchBox.value);
});


