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

let setCardBackground = (weather) => {
  let body = document.body;

  switch (weather) {
    case 'Thunderstorm':
      body.style.backgroundImage = 'url(https://media.giphy.com/media/iN6lLmUb8exMI/giphy.gif)';
      break;
    case 'Drizzle':
      body.style.backgroundImage = 'url(https://media.giphy.com/media/l0IrIkq7Q3iRII0hy/source.gif)';
      break;
    case 'Rain':
      body.style.backgroundImage = 'url(https://media.giphy.com/media/s9cu1TZU37KY8/source.gif)';
      break;  
    case 'Snow':
      body.style.backgroundImage = 'url(https://media.giphy.com/media/rRmBOCZDJJGU0/source.gif)';
      break;
    case 'Clear':
      body.style.backgroundImage = 'url(https://media.giphy.com/media/u01ioCe6G8URG/source.gif)';
      break;
    case 'Clouds':
      body.style.backgroundImage = 'url(https://media.giphy.com/media/gk3s6G7AdUNkey0YpE/giphy.gif)';
      break;

    default:
      body.style.backgroundImage = 'url(https://media.giphy.com/media/yhZr5Wx7CBFbq/source.gif)';
  }
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

  setCardBackground(weather.main);
}

export default setTags