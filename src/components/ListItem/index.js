import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, StyleSheet, Text, Button, Animated, TouchableOpacity } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';

function PuxarEsquerda(progress, eixoX) {
    const scale = eixoX.interpolate({
        inputRange: [0, 100],
        outputRange: [0, 1],
        extrapolate: 'clamp'
    })
    return (
        <View style={styles.deletar}>
            <Animated.Text style={[styles.textoList, { transform: [{ scale }] }]}>Deletar</Animated.Text>

        </View>
    )
}

function PuxarDireita({progress, eixoX, onPress}) {
    const scale = eixoX.interpolate({
        inputRange: [-100, 0],
        outputRange: [1, 0],
        extrapolate: 'clamp'
    })
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.editar}>
                <Animated.Text style={[styles.textoList, { transform: [{ scale }] }]}>Editar</Animated.Text>

            </View>
        </TouchableOpacity>
    )
}

export default function ListItem({ data, deletar, editar }) {
    return (
        <Swipeable
            renderLeftActions={PuxarEsquerda}
            onSwipeableLeftOpen={deletar}
            renderRightActions={(progress, eixoX) => <PuxarDireita progress={progress} eixoX={eixoX} onPress={editar}/>}
        >
            <View style={styles.container}>
                <Text style={styles.texto}>{data.nome}</Text>


            </View>
        </Swipeable>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        paddingHorizontal: 10,
        paddingVertical: 20


    },

    texto: {
        color: '#222',
        fontSize: 15
    },
    deletar: {
        backgroundColor: '#d62525',
        justifyContent: 'center',
        flex: 1
    },
    textoList: {
        color: '#FFF',
        fontSize: 19,
        padding: 20
    },
    editar: {
        backgroundColor: '#1f8cb6',
        justifyContent: 'center',

    }



});

