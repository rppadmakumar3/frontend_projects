const cityInput = document.getElementById('city-input')
const fetchBtn = document.getElementById('fetch')

fetchBtn.addEventListener('click', async function() {
    var city = cityInput.value
    const returnData = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=dcbd0b3ac3c5ed7fd546158afb6c24c8`)
    const updatedData = await returnData.json()
    
    const cityName = document.getElementById('city')
    const weather = document.getElementById('weather')
    const temperatue = document.getElementById('temp')
    const tempLevel = document.getElementById('temp-level')
    const pressure = document.getElementById('pressure')
    const humidity = document.getElementById('humidity')
    const windSpeed = document.getElementById('wind')
    const sunRise = document.getElementById('sunrise')
    const sunSet = document.getElementById('sunset')

    cityName.innerText = `${updatedData.name}, ${updatedData.sys.country}`
    weather.innerText = updatedData.weather[0].main
    temperatue.innerText = `${(updatedData.main.temp - 273.15).toFixed(3)}°C`
    tempLevel.innerText = `${updatedData.main.temp_min} | ${updatedData.main.temp_max}`
    pressure.innerText = updatedData.main.pressure
    humidity.innerText = updatedData.main.humidity
    windSpeed.innerText = `${updatedData.wind.speed} KM/H`
    sunRise.innerText = UnixTimestamp(updatedData.sys.sunrise)
    sunSet.innerText = UnixTimestamp(updatedData.sys.sunset)
})

function UnixTimestamp(time){
    let date = new Date(time*1000)
    return date.toLocaleTimeString();
}