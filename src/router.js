import React from 'react';
import { TabNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import HomeScreen from './screens/HomeScreen';
import BeerView from './screens/BeerView';
import FoodView from './screens/FoodView';
import ProfileView from './screens/ProfileView';

export const Tabs = TabNavigator({
  BeerView: {
    screen: BeerView,
  },
  FoodView: {
    screen: FoodView,
  },
  Profile: {
  	screen: ProfileView
  }
});