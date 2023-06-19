import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FirstScreen from '../../screens/FirstScreen';
import SecondScreen from '../../screens/SecondScreen';

const Tab = createBottomTabNavigator();

const AppBottomNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="FirstScreen" component={FirstScreen} />
      <Tab.Screen name="SecondScreen" component={SecondScreen} />
    </Tab.Navigator>
  );
};
export default AppBottomNavigation;
