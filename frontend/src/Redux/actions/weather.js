import axios from 'axios';


const fetchCurrentWeather = (lat,lon) => {
  const getApiUrl =`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=e106cc09123fb248672ad6d8a4e724ff`;

    return  (dispatch) => {
      return  axios.get(getApiUrl)
        .then(response => {
          dispatch(currentWeather(response.data))
        })
        .catch(error => {
          throw(error);
        }); 
    };

  };


  const currentWeather = (weather) => {
    return {
      type: 'FETCH_CURRENT_WEATHER',
      data : weather
    }
  };

  const action ={fetchCurrentWeather};

  export default action;