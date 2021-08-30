let container = document.getElementById("container");
let searchForm = document.getElementById("search__submit");
let searchInput = document.getElementById("search__input");
let temperatureDegrees = document.getElementById("degreeNumber");
let weatherIcon = document.getElementById("weatherIcon");
let temperatureDescription = document.getElementById("description");
let timeZone = document.getElementById("timezone");
let date = document.getElementById("date");
let min = document.getElementById("min");
let max = document.getElementById("max");

const displayBackgroundImage = ()=>{

}
const displayData = ()=>{

}

const getWeatherData = async (ciudad)=>{

    const res = await fetch('https://community-open-weather-map.p.rapidapi.com/find?q=${ciudad}&lat=0&units=metric', {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
            "x-rapidapi-key": "bbfe591427msh922ee7895aab3f3p1e9cf9jsna0f00db0603e"
        }
    })
    
    const data = res.json();
    
    console.log(data);

    //cambiar fondo de pantalla segun clima
    //displayBackgroundImage(data);

    //mostrar datos en pantalla
    //displayData(data);

}

window.onload = ()=>{
    getWeatherData("Barcelona");
}
