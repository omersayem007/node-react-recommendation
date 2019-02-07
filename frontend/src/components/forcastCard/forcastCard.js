import React, { Component } from 'react';
import ProgressCircle from '../progressBar/ProgressBar';
import moment from 'moment';
import WeatherIcon from 'react-icons-weather';



class Forcast extends Component {

  render() {
    console.log(this.props.forecastData)
    return (
        <div>
          {
            !this.props.forecastData.isFectching &&
            <ProgressCircle/>

          }
          {
            this.props.forecastData.isFectching &&
            <div id="future" className="wrapper">
                <div className="container">
                <h3 className="day">Mon</h3>
                <div className="weatherIcon">
                    <div className="partlycloudy">
                    <div className="inner" />
                    </div>
                </div>
                <p className="conditions">Partly Cloudy</p>
                <p className="tempRange"><span className="high">64</span> | <span className="low">48</span></p>
                </div>
            </div> 
          }
        </div>
    );
  }
}

export default Forcast;