import React, { Component } from 'react';
import {Route,withRouter} from 'react-router-dom';
import Polls from './container/Polls';
import poll from './container/Poll';
import Navbar from './container/Navbar';
import CallBack from './components/Callback';
import MyPolls from './container/Mypolls';
import NewPoll from './container/NewPoll';
import Weather from './container/Weather';
import SecuredRoute from './SecuredRoute/SecuredRoute';
import auth0Client from './auth/Auth';


class App extends Component {

  constructor(props){
    super(props);

    this.state={
      checkingSession:true,
    }
  }

  async componentDidMount() {

    if (this.props.location.pathname === '/callback'){
      this.setState({checkingSession:false});
      return;
    } 
    try {
      await auth0Client.silentAuth();
      this.forceUpdate();
    } catch (err) {
      if (err.error !== 'login_required') console.log(err.error);
    }
    this.setState({checkingSession:false});
    
  }

  render() {

    return (
      <div>
        <Navbar/>
        <Route exact path='/' component={Weather}/>
        {/* <Route exact path='/' component={WeatherCard}/>  */}
        <Route exact path='/poll/:id' component={poll} checkingSession={this.state.checkingSession}/>
        <Route exact path='/callback' component={CallBack}/>
        <SecuredRoute path='/mypolls' component={MyPolls} checkingSession={this.state.checkingSession}/>
        <SecuredRoute path='/newpoll' component={NewPoll} checkingSession={this.state.checkingSession}/>
      </div>
    );
  }
}

export default withRouter(App);
