import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Text} from 'react-native';


export default function Category() {
    return (
            <Text>
                Category
            </Text>  
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
