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
    const forecasT = await getForecastByCity(locationInputValue)

    const currentWeatherIcon = `http:${currentWeather.current.condition.icon}`
    const currentWeatherTemperature = currentWeather.current.temp_c
    const currentWeatherStatus = currentWeather.current.condition.text
    resetWeatherApp()
    
    renderCurrentWeather(currentWeatherIcon,currentWeatherTemperature,currentWeatherStatus)
    
    renderForecast(forecasT.forecast.forecastday[0].hour)
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

    const currentWeather = document.querySelector('.current-weather')
    currentWeather.appendChild(currentWeatherIconEl)
    currentWeather.appendChild(currentWeatherTemperatureEl)
    currentWeather.appendChild(currentWeatherStatusEl)
}




async function getForecastByCity(city){
    
   

    const data = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=f9b4a3ade44947ebbb3183331241011&q=${city}&days=1&aqi=no&alerts=no`)
    const forecast = await data.json()
    console.log(forecast)
    return forecast
}

function createForecastElement(iconSrs,time,temperature){
    const forecastElement = document.createElement('div')
    forecastElement.setAttribute('class',"forecast-element")

    const forecastTime = document.createElement('p')
    forecastTime.setAttribute('class',"forecast-time")
    forecastTime.innerHTML = time.slice(11)

    const forecastIcon = document.createElement('img')
    forecastIcon.setAttribute('class',"forecast-icon")
    forecastIcon.setAttribute('src',`http:${iconSrs}`)
 
    const forecastTemperature = document.createElement('p')
    forecastTemperature.setAttribute('class',"forecast-temperature")
    forecastTemperature.innerHTML = temperature 

    forecastElement.appendChild(forecastTime)
    forecastElement.appendChild(forecastIcon)
    forecastElement.appendChild(forecastTemperature)

    return forecastElement
}

function renderForecast(forecast){
    const forecastContainer = document.querySelector(".forecast")

    forecast.forEach(forecastItem => {
        const forecastElement = createForecastElement(forecastItem.condition.icon,forecastItem.time,forecastItem.temp_c)
        forecastContainer.appendChild(forecastElement)
    })
}

function resetWeatherApp(){
    const currentWeather = document.querySelector('.current-weather')
    currentWeather.innerHTML=''

    const forecastContainer = document.querySelector(".forecast")
    forecastContainer.innerHTML=''

}