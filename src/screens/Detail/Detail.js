import React, {useState, useContext} from 'react';
import {SafeAreaView, View, Text, Image, ScrollView} from 'react-native';
import styles from './Detail.style';

const Detail = props => {
  const {simpson} = props.route.params;

  return (
    <SafeAreaView style={styles.container}>
        <Image
          style={styles.img}
          resizeMode="contain"
          source={{
            uri: simpson.avatar,
          }}
        />
        <Text style={styles.name}>{simpson.name}</Text>
        <Text style={styles.job}>{simpson.job}</Text>
        <Text style={styles.description}>{simpson.description}</Text>
    </SafeAreaView>
  );
};

export default Detail;
