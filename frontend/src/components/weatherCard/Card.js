import React, { Component } from 'react';
import ProgressCircle from '../progressBar/ProgressBar';
import moment from 'moment';
import WeatherIcon from 'react-icons-weather';
import './style.css';



class Layout extends Component {

  render() {
    console.log(this.props.weatherData)
    return (
        <div>
          {
            !this.props.weatherData.isFectching &&
            <ProgressCircle/>

          }
          {

            this.props.weatherData.isFectching &&
            <div>
              <h1 class="location">{this.props.weatherData.weather.name}</h1>
              <h2 className="date">{moment().format('dddd MMMM Do YYYY')}</h2>
              <div className="weatherIcon">
                <WeatherIcon name="owm" iconId={this.props.weatherData.weather.weather[0].id} flip="horizontal" rotate="90" />
              </div>
              <p className="temp">{Math.floor(this.props.weatherData.weather.main.temp)-273}</p>
              <p className="conditions">{this.props.weatherData.weather.weather[0].description}</p>
            </div>
            

          }
        </div>
    );
  }
}

export default Layout;