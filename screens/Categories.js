import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import CategoryListItem from '../components/CategoryListItem'

export default function Categories() {
    this.state = {
        categories: [
            {id: 1, name: "Dụng cụ trượt tuyết"},
            {id: 2, name: "Áo trượt tuyết"},
            {id: 3, name: "Kính mũ"}
        ]
    };  
    const {categories} = this.state
    return (
    <FlatList
        data={categories}
        renderItem={({ item }) => <CategoryListItem category ={item}/>}
        keyExtractor = {item => `${item.id}`}
        contentContainerStyle={{paddingLeft: 16, paddingRight: 16}}
    />  
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
