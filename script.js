async function fetchWeather() {
  const weatherLocation = document.getElementById("location").value;
  const apiKey = "3c89f3fd2d86346af4a181fe480aed2b";
  const url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${weatherLocation}&appid=${apiKey}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
console.log(data)
    updateWeather(data); 
  } catch (error) {
    alert(error);
  }
}
function updateWeather(data){
    const city = data.name
    const temperature = data.main.temp
    const description = data.weather[0].description
    const icon= data.weather[0].icon;
    document.getElementById(
      "icon"
    ).src = `https://openweathermap.org/img/wn/${icon}@2x.png`;

   document.getElementById("city").innerHTML = `weather in ${city}`;
   document.getElementById("temperature").innerHTML = `temperature: ${temperature}c°`;
   document.getElementById("description").innerHTML =` description.${description}`;
  document.getElementById("weather").style.display ="block";
}