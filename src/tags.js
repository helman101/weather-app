import weatherData from './weather';

const getImage = (code) => {
  const url = `http://openweathermap.org/img/wn/${code}@2x.png`;
  return url;
};

const getTags = () => {
  const cityName = document.querySelector('.city');
  const img = document.querySelector('.weather-img');
  const temperature = document.querySelector('.temperature');
  const condition = document.querySelector('.condition');
  const description = document.querySelector('.description');
  const feelsLike = document.querySelector('.feels-like');
  const minTemp = document.querySelector('.min-temp');
  const maxTemp = document.querySelector('.max-temp');

  return {
    cityName, img, temperature, condition, description, feelsLike, minTemp, maxTemp,
  };
};

const setUnitString = (unit) => {
  let string;

  switch (unit) {
    case 'imperial':
      string = '°F';
      break;
    case 'standard':
      string = '°K';
      break;
    default:
      string = '°C';
  }

  return string;
};

const setCardBackground = (weather) => {
  const { body } = document;

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
};

const setTags = (temperatures, weather, unit) => {
  const tags = getTags();

  const unitTemp = setUnitString(unit);

  tags.cityName.textContent = weatherData.getName();
  tags.temperature.textContent = `${parseInt(temperatures.temp, 10)} ${unitTemp}`;
  tags.img.src = getImage(weather.icon);
  tags.condition.textContent = weather.main;
  tags.description.textContent = weather.description;
  tags.feelsLike.textContent = `Feel: ${parseInt(temperatures.feels_like, 10)} ${unitTemp}`;
  tags.minTemp.textContent = `Min: ${parseInt(temperatures.temp_min, 10)} ${unitTemp}`;
  tags.maxTemp.textContent = `Max: ${parseInt(temperatures.temp_max, 10)} ${unitTemp}`;

  setCardBackground(weather.main);
};

export default setTags;