import React from 'react';
import {SafeAreaView} from 'react-native';
import MaterialSpinner from '../MaterialSpinner';
import styles from './Loading.style';

const Loading = () => {
  return (
    <SafeAreaView style={styles.container}>
      <MaterialSpinner style={styles.text} />
    </SafeAreaView>
  );
};

export default Loading;
