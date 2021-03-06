import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from '../screens/HomeScreen';
import RecieverDetailsScreen from '../screens/RecieverDetailsScreen';



export const AppStackNavigator = createStackNavigator({
  ToyAsks : {
    screen : HomeScreen,
    
  },

  RecieverDetails : {
    screen : RecieverDetailsScreen,
    navigationOptions:{
      headerShown : false
    }
  },

},
  {
    initialRouteName: 'ToyAsks'
  }
);