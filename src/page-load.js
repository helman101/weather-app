import weatherData from './weather'

let getImage = (code) => {
  let url = `http://openweathermap.org/img/wn/${code}@2x.png`
  return url
}

let getTags = () => {
  let cityName = document.querySelector('.city');
  let img = document.querySelector('.weather-img');
  let temperature = document.querySelector('.temperature');
  let condition = document.querySelector('.condition');
  let description = document.querySelector('.description');
  let feelsLike = document.querySelector('.feels-like');
  let minTemp = document.querySelector('.min-temp');
  let maxTemp = document.querySelector('.max-temp');

  return { cityName, img, temperature, condition, description, feelsLike, minTemp, maxTemp }
}

let setTags = (temperatures, weather) => {
  let tags = getTags();
  tags.cityName.textContent = weatherData.getName();
  tags.temperature.textContent = `${parseInt(temperatures.temp)} °C`
  tags.img.src = getImage(weather.icon)
  tags.condition.textContent = weather.main;
  tags.description.textContent = weather.description;
  tags.feelsLike.textContent = `Feel: ${parseInt(temperatures.feels_like)} °C`;
  tags.minTemp.textContent = `Min: ${parseInt(temperatures.temp_min)} °C`;
  tags.maxTemp.textContent = `Max: ${parseInt(temperatures.temp_max)} °C`;
}

let ubicationSuccess = async function(data) {
  await weatherData.getWeatherByUbication(41, 12);
  let temperatures = weatherData.getTemperatures();
  let weatherInfo = weatherData.getWeatherInfo();
  setTags(temperatures, weatherInfo);
}

let getUbication = () => {
  navigator.geolocation.getCurrentPosition(async function(data) { await ubicationSuccess(data) }, function(err) { alert(`Please allow location access`) });
}


let pageLoad = () => {
  let container = document.querySelector('.container');
  let card = document.createElement('div');
  card.classList.add('card');
  let cityName = document.createElement('div');
  cityName.classList.add('city');
  let temperatureWrapper = document.createElement('div');
  let image = document.createElement('img');
  image.classList.add('weather-img');
  let temperature = document.createElement('div');
  temperature.classList.add('temperature');
  let dataWrapper = document.createElement('div');
  let condition = document.createElement('p');
  condition.classList.add('condition');
  let description = document.createElement('p');
  description.classList.add('description');
  let feelsLike = document.createElement('p');
  feelsLike.classList.add('feels-like')
  let minTemp = document.createElement('p');
  minTemp.classList.add('min-temp');
  let maxTemp = document.createElement('p');
  maxTemp.classList.add('max-temp')

  let ubication = () => { 
    getUbication();
  }

  ubication();
  
  dataWrapper.appendChild(condition);
  dataWrapper.appendChild(description);
  dataWrapper.appendChild(feelsLike);
  dataWrapper.appendChild(maxTemp);
  dataWrapper.appendChild(minTemp);
  temperatureWrapper.appendChild(temperature);
  temperatureWrapper.appendChild(image);
  card.appendChild(cityName)
  card.appendChild(temperatureWrapper);
  card.appendChild(dataWrapper);
  container.appendChild(card);
}

export default pageLoad;