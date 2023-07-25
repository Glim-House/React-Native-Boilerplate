import {StyleProp, ViewStyle, TextStyle} from 'react-native';

export interface GhostButtonProps {
  title: string;
  onPress: () => void;
  buttonStyle?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
}
