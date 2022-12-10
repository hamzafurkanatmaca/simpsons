import React from 'react';
import {Text, TextInput, View} from 'react-native';
import styles from './CustomInput.style';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const CustomInput = ({
  label,
  value,
  onChange,
  inputHeight = hp('5%'),
  multiLine = false,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={[styles.textInput, {height: inputHeight}]}
        multiline={multiLine}
        onChangeText={onChange}
      ></TextInput>
    </View>
  );
};

export default CustomInput;
