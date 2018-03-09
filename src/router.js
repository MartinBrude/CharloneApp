import React from 'react';
import { TabNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import HomeScreen from './screens/HomeScreen';
import BeerView from './screens/BeerView';
import FoodView from './screens/FoodView';
import ProfileView from './screens/ProfileView';

const routes = {
  'Cervezas': {
    screen: BeerView,
    icon: 'ios-beer'
  },
  'Comida': {
    screen: FoodView,
    icon: 'ios-pizza'
  },
  'Perfil': {
    screen: ProfileView,
    icon: 'ios-person'
  }
};

export const Tabs = TabNavigator(routes,{
  navigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, tintColor }) => {
      let { routeName } = navigation.state;
      let iconName = routes[routeName].icon;

      iconName = !focused ? iconName + '-outline' : iconName;
      
      return <Icon
      name={iconName}
      type='ionicon'
      color='#000' />;
    },
  })
});