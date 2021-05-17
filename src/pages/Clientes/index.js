import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


export default function Clientes({navigation}) {
    return (
        <View style={styles.container}>
            <Text style={styles.texto}>Clientes</Text>
            <Button title="Produtos"
                onPress={() => navigation.navigate('Produtos',{nome: 'Vinicius Canaan'})}>
            </Button>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',



    },
    texto: {
        fontSize: 25,
        color: '#F00',

    }

})