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
    let notice = document.querySelector('.notice');
    if(notice) { document.body.removeChild(notice) }
    try {
      await weatherData.getWeatherByCity(cityName, unit);
      let temperatures = weatherData.getTemperatures();
      let weatherInfo = weatherData.getWeatherInfo();
      setTags(temperatures, weatherInfo, unit);
    } catch(error) {
      let notice = document.createElement('div');
      notice.classList.add('notice');
      notice.textContent = 'This is not a valid country'
  
      document.body.appendChild(notice)
    }
  }

  return { searchByUbication, searchByCity }
})();

export default searchModule;