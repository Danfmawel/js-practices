async function getCurrentWeatherByCity(city){
    const data = await fetch(`http://api.weatherapi.com/v1/current.json?key=f9b4a3ade44947ebbb3183331241011&q=${city}&aqi=no`)
    
    const currentWeather = await data.json()
    console.log(currentWeather)
    return currentWeather
}

const locationInput = document.querySelector('.location-input')
const locationButton = document.querySelector('.location-button')
locationButton.addEventListener('click',async()=>{
    const locationInputValue = locationInput.value
    const currentWeather = await getCurrentWeatherByCity(locationInputValue)
    
    const currentWeatherIcon = `http:${currentWeather.current.condition.icon}`
    const currentWeatherTemperature = currentWeather.current.temp_c
    const currentWeatherStatus = currentWeather.current.condition.text

    renderCurrentWeather(currentWeatherIcon,currentWeatherTemperature,currentWeatherStatus)
})


function renderCurrentWeather(iconSrs,temperature,status){
    const currentWeatherIconEl = document.createElement('img')
    currentWeatherIconEl.setAttribute('class',"current-weather-icon")
    currentWeatherIconEl.setAttribute('src',iconSrs)

    
    const currentWeatherTemperatureEl = document.createElement('p')
    currentWeatherTemperatureEl.setAttribute('class',"current-weather-temperature")
    currentWeatherTemperatureEl.innerHTML = temperature

    const currentWeatherStatusEl = document.createElement('p')
    currentWeatherStatusEl.setAttribute('class',"current-weather-status")
    currentWeatherStatusEl.innerHTML = status

    const currentWeatherEl = document.querySelector('.current-weather')
    currentWeatherEl.appendChild(currentWeatherIconEl)
    currentWeatherEl.appendChild(currentWeatherTemperatureEl)
    currentWeatherEl.appendChild(currentWeatherStatusEl)
}