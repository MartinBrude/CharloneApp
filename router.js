import React from 'react';
import { TabNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import HomeScreen from './HomeScreen';
import ListView from './ListView';

export const Tabs = TabNavigator({
  HomeScreen: {
    screen: HomeScreen,
  },
  ListView: {
    screen: ListView,
  },
});