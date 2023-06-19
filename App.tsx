// import {View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppScreens from './src/routes/stackNavigation/app';
import Notification from './src/lib/PushNotification/notification';
import {Provider} from 'react-redux';
import store from './src/redux/store/store';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Notification />
        <AppScreens />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
