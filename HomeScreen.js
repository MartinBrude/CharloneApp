/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {Platform, StyleSheet, Text, Image, View, StatusBar, NavigatorIOS} from 'react-native';

export default class HomeScreen extends Component {
  
  componentDidMount(){
    const { navigate } = this.props.navigation;
    this.timeoutHandle = setTimeout(()=>{
      navigate('ListView')
    }, 750);
  }

  render() {
    return (
      <View style={styles.container}>
        <Image 
          style={{width: 200, height: 200}}
          source={require('./logo.png')}/>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});