import React, { Component } from 'react';
import WeatherCard from '../weatherCard/Card';
import ForecastCard from '../forcastCard/forcastCard';
import {forecastData} from '../../util/cast';
import './style.css';



class Layout extends Component {

   

  render() {

    let data ={
      "isFectching":true,
      weather:{
        "coord":{"lon":85.17,"lat":26.67},
      "weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04n"}],
      "base":"stations",
      "main":{"temp":294.291,"pressure":1022.16,"humidity":58,"temp_min":294.291,"temp_max":294.291,"sea_level":1028.58,"grnd_level":1022.16},
      "wind":{"speed":4.94,"deg":24.5005},"clouds":{"all":76},"dt":1549556954,
      "sys":{"message":0.0039,"country":"IN","sunrise":1549501260,"sunset":1549541174},
      "id":1273043,"name":"Dhaka","cod":200

      }
      }

    return (
        <div className="outer">

        <div className="inner">

        <WeatherCard
        //weatherData={this.props.weatherData}
        weatherData={data}
        />

        <div className="forecast">
          <ForecastCard
          forecastData={forecastData}
          />
        </div>

        </div>

        

        </div>
    );
  }
}

export default Layout;