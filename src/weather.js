const weatherModule = (() => {
  const API_KEY = 'fab569fdbaec121a0ae14c37c3e3f3ce';
  let currentData;

  const setCurrentData = (data) => {
    currentData = data;
  };

  const getName = () => currentData.name;

  const getTemperatures = () => currentData.main;

  const getWeatherInfo = () => currentData.weather[0];

  async function getWeatherByCity(city, unitTemp) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unitTemp}&APPID=${API_KEY}`;
    const response = await fetch(url, { mode: 'cors' });
    const weather = await response.json();

    setCurrentData(weather);
  }

  async function getWeatherByUbication(lat, long) {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=${API_KEY}`;
    const response = await fetch(url, { mode: 'cors' });
    const weather = await response.json();

    setCurrentData(weather);
  }

  return {
    getWeatherByCity,
    getWeatherByUbication,
    getName,
    getTemperatures,
    getWeatherInfo,
    setCurrentData,
  };
})();

export default weatherModule;