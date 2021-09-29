// getting all the HTML elements
const inputBox = document.getElementById('input-box');
const city = document.getElementById('city');
const currentDate = document.getElementById('date');
const temperature = document.getElementById('temp');
const minMax = document.getElementById('min-max');
const forecast = document.getElementById('status');
const icon = document.getElementsByClassName('icon');






// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
// 


const weatherApi = {
    key: "7afe24557eda407284f2fc887d8ca293", 
    baseUrl: "https://api.openweathermap.org/data/2.5/weather"
}


// Eventlistener function on keypress

inputBox.addEventListener('keypress', (event)=>{
    if(event.keyCode== 13){
       
        getWeather(inputBox.value );
        document.querySelector('.detail-weather').style.display= "block";
    }

});


// Get weather report
function getWeather(city){
 
    let weather;
    const api = `${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`
   
    fetch(api).then(weather =>{
        return weather.json();
    })
    .then(showWeather);
}

// show weather report 
  function showWeather(data){

     city.textContent= `${data.name}, ${data.sys.country}`;
     temperature.innerHTML= `${data.main.temp}&deg;C` ;
     minMax.innerHTML = `${data.main.temp_min}&deg;C (min) / ${data.main.temp_max}&deg;C(max)`
     forecast.innerText = data.weather[0].main;
      let todayDate = new Date();

      currentDate.innerText = manageDate(todayDate);

      if(forecast.textContent== 'Haze'){
        document.body.style.backgroundImage = "url(img/haze.jpg)";
 } 
            else if(forecast.textContent== 'Clouds'){
                document.body.style.backgroundImage = "url(img/Cloudy.jpg)";
            }
            else if(forecast.textContent== 'Clear'){
                document.body.style.backgroundImage = "url(img/Clear.jpg)";
            }
    else if(forecast.textContent== 'Snow'){
        document.body.style.backgroundImage = "url(img/snow.jpg)";
 }
   
else if(forecast.textContent== 'Fog'){
    document.body.style.backgroundImage = "url(img/fog.jpg)";
}
else if(forecast.textContent== 'Rain'){
    document.body.style.backgroundImage = "url(img/rain.jpg)";
}
else{
    document.body.style.backgroundImage = "url(img/weather.jpg)";

}

  }

// Manage date
 function manageDate(dateArg){
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January","february","March","April","May","June","July","August","September","October","Novermber","December",];

const year = dateArg.getFullYear();
const month = months[dateArg.getMonth()];
const day = days[dateArg.getDay()];
const date = dateArg.getDate();
return `${date} ${month} (${day}), ${year}`;
 

 }


 