import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import CategoryListItem from './components/CategoryListItem'

export default function App() {
  return (
    <View >
      <ScrollView style={{paddingLeft: 16, paddingRight: 16}} 
      contentContainerStyle={{backgroundColor: '#FFF'}} >
        <CategoryListItem/>
        <CategoryListItem/>
        <CategoryListItem/>
        <CategoryListItem/>
        <CategoryListItem/>
        <CategoryListItem/>
      </ScrollView>
    </View>
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
