import weatherData from './weather'
import setTags from './tags'

let ubicationSuccess = async function(data) {
  await weatherData.getWeatherByUbication(41, 12);
  let temperatures = weatherData.getTemperatures();
  let weatherInfo = weatherData.getWeatherInfo();
  setTags(temperatures, weatherInfo);
}

let searchModule = (() => {
  let searchByUbication = () => {
    navigator.geolocation.getCurrentPosition(async function(data) { await ubicationSuccess(data) }, function(err) { alert(`Please allow location access`) });
  }
  
  let searchByCity = async function(cityName, unit) {
    try {
      await weatherData.getWeatherByCity(cityName, unit);
      let temperatures = weatherData.getTemperatures();
      let weatherInfo = weatherData.getWeatherInfo();
      setTags(temperatures, weatherInfo, unit);
    }
    catch {
      let notice = document.createElement('div');
      notice.textContent = 'This is\'nt a valid country'
  
      document.body.appendChild(notice)
    }
  }

  return { searchByUbication, searchByCity }
})();

export default searchModule;