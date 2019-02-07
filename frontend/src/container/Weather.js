import React , { Component } from 'react';
import { connect } from 'react-redux';
import Layout from '../components/layout/Layout';
import weatherAction from '../Redux/actions/weather';



class Weather extends Component {

    componentDidMount(){
        this.getLocation(); 
    }

    showPosition=(position)=>{
       // this.props.onfetchWeather(position.coords.latitude,position.coords.longitude);
    }

    showError(){
    }

    getLocation = ()=>{
        navigator.geolocation.getCurrentPosition(
        this.showPosition,this.showError, {enableHighAccuracy: true}
        );
    }

  render() { 
    return (
        <Layout
        weatherData={this.props.weatherData}
        />
    );
  }
}

const mapStateToWeatherProps = (state) => {
    return {
        weatherData:state.currentWeather
    };
  };

  const mapDispatchToWeatherProps = (dispatch) => (
    {
       onfetchWeather : (lat,lon) => (  
           dispatch(weatherAction.fetchCurrentWeather(lat,lon))
       )
     }
   );

export default connect(
    mapStateToWeatherProps,
    mapDispatchToWeatherProps
)(Weather);