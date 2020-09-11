import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Text} from 'react-native';


export default function Category() {
    return (
        <View>
            <Text>
                Category
            </Text>
        </View>
    );
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch',
        backgroundColor: '#fff',
        justifyContent: 'center',
        marginLeft: 16,
        marginRight: 16
    },
});
