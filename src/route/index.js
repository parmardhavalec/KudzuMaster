import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from '../pages/HomeScreen';
import WinnerScreen from '../pages/WinnerScreen';

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="WinnerScreen" component={WinnerScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
