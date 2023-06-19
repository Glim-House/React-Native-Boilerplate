import {Appearance, Button, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {useTheme} from '../hooks/DarkMode/Dartheme';
import appSlice, {Theme} from '../redux/slices/app.slice';
import {useDispatch} from 'react-redux';

const FirstScreen = () => {
  const {theme, changeTheme} = useTheme();
  const dispatch = useDispatch();
  const handleAppearanceChange = () => {
    const colorScheme: Theme = Appearance.getColorScheme() ?? 'light';
    dispatch(appSlice.actions.setTheme(colorScheme));
  };
  useEffect(() => {
    const subscription = Appearance.addChangeListener(handleAppearanceChange);
    return () => {
      subscription.remove();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={[styles.container, theme.backgroundColor]}>
      <Button title="Press me" onPress={() => changeTheme('dark')} />
      <Text>FirstScreen</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {flex: 1},
});

export default FirstScreen;
