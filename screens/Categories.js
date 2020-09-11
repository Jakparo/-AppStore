import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import CategoryListItem from '../components/CategoryListItem'

export default function Categories({navigation}) {
    this.state = {
        categories: [
            {id: 1, name: "Dụng cụ trượt tuyết"},
            {id: 2, name: "Áo trượt tuyết"},
            {id: 3, name: "Kính mũ"}
        ]
    };  

    const {categories} = this.state;

    return (
    <FlatList
        data={categories}   
        renderItem={({ item }) => <CategoryListItem
            category ={item} onPress={()=> navigation.navigate('Category')}/>
        }
        keyExtractor = {item => `${item.id}`}
        contentContainerStyle={styles.container}
    />  
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch',
        backgroundColor: '#fff',
        paddingLeft: 16, 
        paddingRight: 16
    },
});
