import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useTheme} from '../hooks/DarkMode/Dartheme';
import LottieView from 'lottie-react-native';

const SecondScreen = () => {
  const {theme, changeTheme} = useTheme();

  return (
    <View style={[styles.container, theme.backgroundColor]}>
      <Button title="Press me" onPress={() => changeTheme('light')} />

      <Text>SecondScreen</Text>
      <View style={{width: '100%', height: '50%'}}>
        <LottieView
          source={{
            uri: 'https://assets9.lottiefiles.com/packages/lf20_lrjha2vi.json',
          }}
          autoPlay
          loop
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {flex: 1},
});
export default SecondScreen;
