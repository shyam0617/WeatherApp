const apikey="fbfb7df8b40e020c8090134f98f0c852";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

let searchBox=document.querySelector(".search input");
let searchBtn=document.querySelector(".search button");
let weathericon=document.querySelector(".weather-icon");


async  function checkWeather(city){
    let res=await fetch(apiurl + city+ `&appid=${apikey}`);
    let data= await res.json();
    // console.log(data);

    if(res.status==404)
    {
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }
    else{
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=data.main.temp+"°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity;
    document.querySelector(".wind").innerHTML=data.wind.speed+"km/h";
    
    document.querySelector(".weather").style.display="block";
    
    if(data.weather[0].main=="clouds")
    {
        weathericon.src="weather-app-img/images/clouds.png";
    }
    else if(data.weather[0].main=="clear")
    {
        weathericon.src="weather-app-img/images/clear.png";
    }
    else if(data.weather[0].main=="Rain")
    {
        weathericon.src="weather-app-img/images/rain.png";
    }
    else if(data.weather[0].main=="Drizzle")
    {
        weathericon.src="weather-app-img/images/drizzle.png";
    }
    else if(data.weather[0].main=="Mist")
    {
        weathericon.src="weather-app-img/images/mist.png";
    }
    }

}
searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
});