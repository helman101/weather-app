let weatherModule = (() => {

  const API_KEY = 'API_KEY_HERE'
  let currentData;

  let setCurrentData = (data) => {
    currentData = data
  }

  let getName = () => {
    return currentData.name
  }

  let getTemperatures = () => {
    return currentData.main
  }

  let getWeatherInfo = () => {
    return currentData.weather[0]
  }

  async function getWeatherByCity(city, unitTemp) {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unitTemp}&APPID=${API_KEY}`
    let response = await fetch(url, { mode: 'cors' })
    let weather = await response.json();
  
    setCurrentData(weather)
  };
 
  async function getWeatherByUbication(lat = 40, long = -73) {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=${API_KEY}`
    let response = await fetch(url, { mode: 'cors' })
    let weather = await response.json();
  
    setCurrentData(weather)
  };

  return { getWeatherByCity, getWeatherByUbication, getName, getTemperatures, getWeatherInfo, setCurrentData }

})();

export default weatherModule;