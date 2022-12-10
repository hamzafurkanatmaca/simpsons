import React, {useContext} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {HomeContext} from '../../context/HomeContext/HomeProvider';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './Simpson.style';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';

const Simpson = ({simpson}) => {
  const {state, dispatch} = useContext(HomeContext);
  const {homeMainData} = state;
  const navigation = useNavigation();
  // console.log(simpson);
  const handleUp = () => {
    if (homeMainData.simpsons[0].index == simpson.index) {
      return; //en üstteki simpsonu yukarı taşımaya çalışıyorsa izin verme.
    }

    var upperSimpsonIndex = simpson.index - 1;

    var foundedUpperSimpson = homeMainData.simpsons.filter(function (item) {
      return item.index === upperSimpsonIndex;
    });

    foundedUpperSimpson[0].index++;
    simpson.index--;

    var simpsons = homeMainData.simpsons.map(s =>
      s.id !== simpson.id ? s : simpson,
    );

    var finalSimpsons = homeMainData.simpsons.map(s =>
      s.id !== foundedUpperSimpson[0].id ? s : foundedUpperSimpson[0],
    );

    save(finalSimpsons);
  };

  const handleDown = () => {
    if (
      homeMainData.simpsons[homeMainData.simpsons.length - 1].index ==
      simpson.index
    ) {
      return; //en alttaki simpsonu aşağı taşımaya çalışıyorsa izin verme.
    }

    var upperSimpsonIndex = simpson.index + 1;

    var foundedUpperSimpson = homeMainData.simpsons.filter(function (item) {
      return item.index === upperSimpsonIndex;
    });

    foundedUpperSimpson[0].index--;
    simpson.index++;

    var simpsons = homeMainData.simpsons.map(s =>
      s.id !== simpson.id ? s : simpson,
    );

    var finalSimpsons = homeMainData.simpsons.map(s =>
      s.id !== foundedUpperSimpson[0].id ? s : foundedUpperSimpson[0],
    );
    save(finalSimpsons);
  };

  const handleDelete = () => {
    if (
      homeMainData.simpsons[homeMainData.simpsons.length - 1].index ==
      simpson.index
    ) {
      //en alttaki simpsonu siliyorsa sadece silmek yeterli.
      var finalSimpsons = homeMainData.simpsons.filter(function (item) {
        return item.index !== simpson.index;
      });
      save(finalSimpsons);
    } else {
      //yok eğer ortalardan veya en üstten bir simpson siliniyorsa aşağıdaki tüm simpsonların indexleri 1 azaltılmalı.

      var survivingSimpsons = homeMainData.simpsons.filter(function (item) {
        return item.index !== simpson.index;
      });

      var finalSimpsons = survivingSimpsons.map(s =>
        s.index < simpson.index
          ? s
          : {
              avatar: s.avatar,
              description: s.description,
              id: s.id,
              index: s.index - 1,
              job: s.job,
              name: s.name,
            },
      );
      save(finalSimpsons);
    }
  };

  const save = finalSimpsons => {
    dispatch({type: 'SET_SIMPSONS', payload: {simpsons: finalSimpsons}});
    setStorageValue('simpsons', JSON.stringify(homeMainData.simpsons));
  };
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Detail', {simpson: simpson});
      }}
    >
      <View style={styles.container}>
        <View style={styles.element}>
          <Text>{simpson.index}</Text>
          <Image
            style={styles.img}
            resizeMode="contain"
            source={{
              uri: simpson.avatar,
            }}
          />
          <Text>{simpson.name}</Text>
        </View>
        <View style={styles.buttonGroup}>
          <TouchableOpacity onPress={handleUp}>
            <Icon name="upcircle" style={[styles.icon, styles.green]} />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleDown}>
            <Icon name="downcircle" style={[styles.icon, styles.brown]} />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleDelete}>
            <Icon name="delete" style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const setStorageValue = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    // saving error
  }
};

export default Simpson;
