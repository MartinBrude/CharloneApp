import React from 'react';
import { TabNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import HomeScreen from './HomeScreen';
import SecondView from './SecondView';

export const Tabs = TabNavigator({
  HomeScreen: {
    screen: HomeScreen,
  },
  SecondView: {
    screen: SecondView,
  },
});