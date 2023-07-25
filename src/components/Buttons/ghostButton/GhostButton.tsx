import React, {FC} from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from './styles';
import {GhostButtonProps} from '../../../interfaces/Interfaces';

const GhostButton: FC<GhostButtonProps> = ({
  title,
  onPress,
  buttonStyle,
  titleStyle,
}) => {
  return (
    <TouchableOpacity style={[styles.button, buttonStyle]} onPress={onPress}>
      <Text style={[styles.title, titleStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default GhostButton;
