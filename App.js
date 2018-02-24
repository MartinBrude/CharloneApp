/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {Platform, StyleSheet, Text, Image, View} from 'react-native';
import {StackNavigator} from 'react-navigation';
import HomeScreen from './HomeScreen.js';
import ListView from './ListView.js';
import AuthenticationView from './AuthenticationView.js';

export default App = StackNavigator({
  Home: { screen: HomeScreen },
  AuthenticationView: { screen: AuthenticationView},
  ListView: {screen : ListView},
}, {
  headerMode: 'none',
  navigationOptions: { 
    headerVisible: false
  }
});
