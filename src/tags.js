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

let setUnitString = (unit) => {
  let string;

  switch (unit) {
    case 'imperial':
      string = '°F'
      break;
    case 'standard':
      string = '°K'
      break;
    default:
      string = '°C'
  }

  return string
}

let setTags = (temperatures, weather, unit) => {
  let tags = getTags();

  let unitTemp = setUnitString(unit);

  tags.cityName.textContent = weatherData.getName();
  tags.temperature.textContent = `${parseInt(temperatures.temp)} ${unitTemp}`
  tags.img.src = getImage(weather.icon)
  tags.condition.textContent = weather.main;
  tags.description.textContent = weather.description;
  tags.feelsLike.textContent = `Feel: ${parseInt(temperatures.feels_like)} ${unitTemp}`;
  tags.minTemp.textContent = `Min: ${parseInt(temperatures.temp_min)} ${unitTemp}`;
  tags.maxTemp.textContent = `Max: ${parseInt(temperatures.temp_max)} ${unitTemp}`;
}

export default setTags