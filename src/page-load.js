import searchMod from './search';

const pageLoad = () => {
  const container = document.querySelector('.container');
  const cityField = document.querySelector('.city-text');
  const unitSelect = document.querySelector('.unit');
  const searchBtn = document.querySelector('.search-btn');

  searchBtn.onclick = () => { searchMod.searchByCity(cityField.value || 'New york', unitSelect.value); };

  const card = document.createElement('div');
  card.classList.add('card', 'd-flex', 'justify-content-center', 'align-items-center', 'flex-column');
  const cityName = document.createElement('div');
  cityName.classList.add('city', 'bold');
  const temperatureWrapper = document.createElement('div');
  temperatureWrapper.classList.add('d-flex', 'justify-content-center', 'align-items-center', 'flex-column');
  const image = document.createElement('img');
  image.classList.add('weather-img');
  const temperature = document.createElement('div');
  temperature.classList.add('temperature', 'bold');
  const dataWrapper = document.createElement('div');
  dataWrapper.classList.add('data-wrapper');
  const condition = document.createElement('p');
  condition.classList.add('condition', 'mb-10');
  const description = document.createElement('p');
  description.classList.add('description', 'mb-10');
  const feelsLike = document.createElement('p');
  feelsLike.classList.add('feels-like');
  const minTemp = document.createElement('p');
  minTemp.classList.add('min-temp');
  const maxTemp = document.createElement('p');
  maxTemp.classList.add('max-temp');

  const ubication = () => {
    searchMod.searchByUbication();
  };

  ubication();

  dataWrapper.appendChild(condition);
  dataWrapper.appendChild(description);
  dataWrapper.appendChild(feelsLike);
  dataWrapper.appendChild(maxTemp);
  dataWrapper.appendChild(minTemp);
  temperatureWrapper.appendChild(temperature);
  temperatureWrapper.appendChild(image);
  card.appendChild(cityName);
  card.appendChild(temperatureWrapper);
  card.appendChild(dataWrapper);
  container.appendChild(card);
};

export default pageLoad;