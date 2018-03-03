import React, { Component } from 'react';
import { Tabs } from './router';
import SplashScreen from 'react-native-splash-screen';

class App extends Component {
  render() {
  	SplashScreen.hide()
    return <Tabs />;
  }
}

export default App;