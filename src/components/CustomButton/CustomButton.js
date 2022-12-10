import React from 'react';
import {Text, TouchableOpacity,View} from 'react-native';
import styles from './CustomButton.style';

const CustomButton = ({onClick, btnText}) => {
  return (
      <TouchableOpacity style={styles.btn} onPress={onClick}>
        <Text style={styles.text}>{btnText}</Text>
      </TouchableOpacity>
  );
};

export default CustomButton;
