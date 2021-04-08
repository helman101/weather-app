import weatherData from './weather';
import setTags from './tags';

const ubicationSuccess = async (data) => {
  await weatherData.getWeatherByUbication(data.coords.latitude, data.coords.longitude);
  const temperatures = weatherData.getTemperatures();
  const weatherInfo = weatherData.getWeatherInfo();
  setTags(temperatures, weatherInfo);
};

const searchModule = (() => {
  const searchByUbication = () => {
    navigator.geolocation.getCurrentPosition(async (data) => { await ubicationSuccess(data); }, () => { alert('Please allow location access'); });
  };

  const searchByCity = async (cityName, unit) => {
    const notice = document.querySelector('.notice');
    if (notice) { document.body.removeChild(notice); }
    try {
      await weatherData.getWeatherByCity(cityName, unit);
      const temperatures = weatherData.getTemperatures();
      const weatherInfo = weatherData.getWeatherInfo();
      setTags(temperatures, weatherInfo, unit);
    } catch (error) {
      const notice = document.createElement('div');
      notice.classList.add('notice');
      notice.textContent = 'This is not a valid country';

      document.body.appendChild(notice);
    }
  };

  return { searchByUbication, searchByCity };
})();

export default searchModule;