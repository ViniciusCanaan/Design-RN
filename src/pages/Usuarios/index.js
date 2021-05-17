import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, StyleSheet, Text, Button, SafeAreaView, Image, Animated, ScrollView, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ListItem from '../../components/ListItem';





export default function Usuarios({ route }) {

    const usuarios = [
        { id: '1', nome: 'Vinícius Canaan' },
        { id: '2', nome: 'Princesa Canaan' },
        { id: '3', nome: 'Michelle Canaan' },
        { id: '4', nome: 'Alexandre Vinícius' },
        { id: '5', nome: 'Francimary Canaan' },

    ]

    return (
        <SafeAreaView>
            <View style={
                styles.header}>
                <Image source={require('../../../src/assets/img/logo.png')}
                    style={{ width: 30, height: 30 }}
                    resizeMode="contain"
                />

                <Text style={{ color: '#FFF', fontSize: 17 }}>Lista de Usuários</Text>


                <Image source={require('../../../src/assets/img/logout2.png')}
                    style={{ width: 30, height: 30 }}
                    resizeMode="contain"
                />


            </View>

            <View>
                <FlatList
                    data={usuarios}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <ListItem
                            data={item}
                            deletar = {()=> alert('Deletar')}
                            editar = {()=> alert('Editar')}

                        />
                    )}
                        ItemSeparatorComponent={() => <Separator/>}
                        
                >
                </FlatList>

            </View>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#000',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        borderBottomWidth: 2,
        borderBottomColor: '#fff',


    },


});

const Separator = () => <View style={{flex:1, height:1, backgroundColor: '#ddd'}}></View>

