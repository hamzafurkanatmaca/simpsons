import React from 'react';
import {View, Text} from 'react-native';
import styles from './EmptyList.style';

const EmptyList = () => {
  return (
    <View style={styles.background}>
      <Text style={styles.text}>Data not found.</Text>
    </View>
  );
};

export default EmptyList;