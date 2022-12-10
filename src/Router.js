/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import Home from './screens/Home';
import Add from './screens/Add';
import Detail from './screens/Detail';
import HomeProvider from './context/HomeContext/HomeProvider';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createStackNavigator();

function StackNavs() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Simpsons',
        }}
      />
      <Stack.Screen
        name="Add"
        component={Add}
        options={{
          title: 'Add New Character',
        }}
      />      
      <Stack.Screen
        name="Detail"
        component={Detail}
        options={{
          title: 'Details',
        }}
      />
    </Stack.Navigator>
  );
}

const Router = props => {
  return (
    <HomeProvider>
      <NavigationContainer>
        <StackNavs />
      </NavigationContainer>
    </HomeProvider>
  );
};

export default Router;
