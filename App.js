import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';

import Categories from './screens/Categories';
import Category from './screens/Category';

const  Stack =  createStackNavigator();

export default function App() {  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name ='Categories' component={Categories}/>
        <Stack.Screen name ='Category' component={Category}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 16,
    marginRight: 16
  },
});
