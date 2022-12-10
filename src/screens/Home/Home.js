import React, {useState, useEffect, useContext} from 'react';
import {
  SafeAreaView,
  View,
  Alert,
  Text,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {simpsonsUrl} from '../../api/urls/urls';
import {useIsFocused} from '@react-navigation/native';
import {HomeContext} from '../../context/HomeContext/HomeProvider';
import EmptyList from '../../components/EmptyList';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loading from '../../components/Loading';
import Simpson from '../../components/Simpson';
import styles from './Home.style';
import axios from 'axios';
import Icon from 'react-native-vector-icons/AntDesign';

const Home = (props) => {
  const {state, dispatch} = useContext(HomeContext);
  const [loading, setLoading] = useState(false);
  const {homeMainData} = state;
  const isFocused = useIsFocused();

  const checkStorage = async () => {
    setLoading(true);
    const simpsonsJson = await AsyncStorage.getItem('simpsons');
    if (simpsonsJson) {
      const simpsonsObj = JSON.parse(simpsonsJson);
      dispatch({type: 'SET_SIMPSONS', payload: {simpsons: simpsonsObj}});
    } else {
      await getList();
    }
    setLoading(false);
  };

  const getList = async () => {
    const result = await apiQuery(simpsonsUrl);
    console.log(result);
    if (result.status == 200) {
      let count = 0;
      result.data.forEach(element => {
        element.index = count;
        count++;
      });
      setStorageValue('simpsons', JSON.stringify(result.data));
      dispatch({type: 'SET_SIMPSONS', payload: {simpsons: result.data}});
    } else {
      giveAlert('Warning!', 'Server Error');
    }
  };

  useEffect(() => {
    checkStorage();
  }, [isFocused]);

  const renderSimpsons = ({item}) => {
    return <Simpson simpson={item} />;
  };

  const handleAdd = () => {
      props.navigation.navigate('Add');
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <SafeAreaView>
      <FlatList
        data={homeMainData.simpsons.sort((a, b) => {
          return a.index - b.index;
        })}
        renderItem={renderSimpsons}
        contentContainerStyle={{paddingBottom: 20}}
        ListEmptyComponent={listEmptyView}
      />
      <TouchableOpacity style={styles.AddButton} onPress={handleAdd}>
        <Icon name="pluscircle" style={styles.icon}/>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

async function apiQuery(url, params) {
  try {
    const res = axios.get(url, params);
    return res;
  } catch (error) {
    giveAlert('Server error. ', error);
  }
}

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

const listEmptyView = () => {
  return <EmptyList />;
};


export default Home;
