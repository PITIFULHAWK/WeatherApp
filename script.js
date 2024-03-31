const input = document.querySelector("input");
const btn = document.getElementById( "btn" );
const icon = document.querySelector(".icon");
const weather = document.querySelector(".weather");
const temperature = document.querySelector(".temperature");
const description = document.querySelector(".description");
const apikey = '8afe93581a1c90fb39d17bb98202bfe2';

btn.addEventListener( "click", () => {
   let city = input.value;
   getWeather(city);
   input.value = "";
});

function getWeather(city){
    console.log(city);
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`)
    .then(response => response.json())
    .then(data =>{
        console.log(data)

        const iconCode = data.weather[0].icon;
        icon.innerHTML = `<img src="https://openweathermap.org/img/wn/${iconCode}.png" alt = "weather icon"/>`; 

        const weatherCity = data.name;
        const weatherContry = data.sys.country;

        weather.innerHTML  = `${weatherCity}, ${weatherContry}`;
        
        let  kelvinTemp = data.main.temp;
        kelvinTemp = kelvinTemp-273;
        const temp = kelvinTemp.toFixed(2);
        temperature.innerHTML = `${temp}°C`;

        const weatherDesc = data.weather[0].description;
        description.innerHTML = `${weatherDesc}`;
    })
}

input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      btn.click();
    }
});


// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
