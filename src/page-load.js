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