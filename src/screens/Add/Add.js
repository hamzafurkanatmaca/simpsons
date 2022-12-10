import React, {useState, useContext} from 'react';
import {
  SafeAreaView,
  View,
  Alert,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {HomeContext} from '../../context/HomeContext/HomeProvider';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './Add.style';
import CustomButton from '../../components/CustomButton';
import CustomInput from '../../components/CustomInput';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Add = props => {
  const {state, dispatch} = useContext(HomeContext);

  const [nameSurname, setNameSurname] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [aboutHimHer, setAboutHimHer] = useState('');
  const [imageLink, setImageLink] = useState('');

  const {homeMainData} = state;

  const handleAdd = () => {
    if (nameSurname && jobTitle && aboutHimHer && imageLink) {
      const currentSimpsons = homeMainData.simpsons;
      const lastSimpson = getMax(currentSimpsons, 'index');
      const addingSimpson = {
        avatar: imageLink,
        description: aboutHimHer,
        id: (parseInt(lastSimpson.id) + 1).toString(),
        index: lastSimpson.index + 1,
        job: jobTitle,
        name: nameSurname,
      };
      currentSimpsons.push(addingSimpson);
      save(currentSimpsons);
      props.navigation.navigate('Home');
    } else {
      giveAlert('Please fill all fields.');
    }
  };

  function getMax(arr, prop) {
    var max;
    for (var i = 0; i < arr.length; i++) {
      if (max == null || parseInt(arr[i][prop]) > parseInt(max[prop]))
        max = arr[i];
    }
    return max;
  }

  const save = finalSimpsons => {
    dispatch({type: 'SET_SIMPSONS', payload: {simpsons: finalSimpsons}});
    setStorageValue('simpsons', JSON.stringify(homeMainData.simpsons));
  };

  return (
    <SafeAreaView style={styles.container}>
      <CustomInput
        label="Name Surname:"
        value={nameSurname}
        onChange={setNameSurname}
      />
      <CustomInput label="Job Title:" value={jobTitle} onChange={setJobTitle} />
      <CustomInput
        label="About Him/Her:"
        value={aboutHimHer}
        onChange={setAboutHimHer}
        inputHeight={hp('10%')}
        multiLine={true}
      />
      <CustomInput
        label="Image Link:"
        value={imageLink}
        onChange={setImageLink}
      />
      <CustomButton onClick={handleAdd} btnText="Add Character" />
    </SafeAreaView>
  );
};

const setStorageValue = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    // saving error
  }
};

const giveAlert = (header, alertText) => {
  Alert.alert(header, alertText, [{text: 'Ok'}]);
};

export default Add;
