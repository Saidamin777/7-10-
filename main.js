const MyApi = "ce099bfac20294a1a7df20b9f7a2ce5e";
const weatherInput = document.getElementById("input");
const weatherBtn = document.getElementById("btn");
const weatherBox = document.getElementById("wrapper")

async function renderApi(){
    const inputValue = weatherInput.value.trim().toLowerCase();
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${MyApi}`);
    const data = await res.json();
    
    const temperatura = (data.main.temp - 273.15).toFixed(1)
    weatherBox.innerHTML = 
`
<h2>${data.name}</h2>
<p>Temp:${temperatura} °C</p>
<p>Weather: ${data.weather[0].main} - ${data.weather[0].description}</p>
 <p>Humidity: ${data.main.humidity}%</p>
 <p>Wind Speed: ${data.wind.speed} m/s</p>
    
`
}
weatherBtn.addEventListener("click" , () => {
    renderApi()
    
})