import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, StyleSheet, Text, Button, KeyboardAvoidingView, Image, Animated } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { useState } from 'react/cjs/react.development';
import { useEffect } from 'react';


export default function Login({navigation}) {

    const[offset] = useState(new Animated.ValueXY({x:0,y:90}))
    const[opac] = useState(new Animated.Value(0));

    useEffect(()=>{
        Animated.parallel([
            Animated.spring(offset.y,{
                toValue:0, 
                speed:4,
                bounciness: 15
            }),
            Animated.timing(opac,{
                toValue:1,
                duration:1000
            })
        ]).start();
   
    },[]);

    return (
        <KeyboardAvoidingView style={styles.background}>
            <View style={styles.logo}>
                <Image style={{width: 300}} resizeMode="contain" source={require('../../assets/img/logoxbox.png')}></Image>
            </View>

        <Animated.View 
        
        style={[styles.formulario,
        {
            opacity: opac,
            transform: [{translateY: offset.y}]}

        ]}>

            <TextInput style={styles.input} placeholder= 'Usuario'
            type='email'
            dataCorrect={false}
            onChangeText={()=>{}}
            ></TextInput>

            <TextInput style={styles.input} placeholder= 'Senha'
            secureTextEntry={true}
            dataCorrect={false}
            onChangeText={()=>{}}
            ></TextInput>
            
            <View style={styles.viewBotao}>
            <TouchableOpacity
            style={styles.botao} 
            onPress={() => navigation.navigate('Home')}>
                <Text style={styles.textoBotao}>Logar</Text>
            </TouchableOpacity>

            <TouchableOpacity
            style={styles.botaoRecuperar} 
            onPress={() => navigation.navigate('Home')}>
                <Text style={styles.textoRecuperar}>Recuperar Senha</Text>
            </TouchableOpacity>
            </View>

        </Animated.View>

        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: '#191919',
        alignItems: 'center',
        justifyContent: 'center'



    },
    logo: { 
       flex:1,
       justifyContent: 'center',
       paddingTop:30
    
    },
    formulario:{
        flex:1,
        paddingBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%'
    },
    input:{
        backgroundColor: '#fff',
        marginBottom: 15,
        color: '#222',
        fontSize: 17,
        borderRadius: 7,
        padding:10,
        width: '90%',

    },

    viewBotao:{
        width:'50%',
        borderRadius: 7,
        paddingTop:17
    },

    botao:{
        backgroundColor: '#107c10',
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 7,
        padding: 10,
        
        
    },
    textoBotao:{
        color: '#fff',
        fontSize:18
    },
    botaoRecuperar:{
        marginTop:15,
        alignItems: 'center'
    },
    textoRecuperar:{
        color:'#fff',
    }

})