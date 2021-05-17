import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from './src/pages/Home';
import Usuarios from './src/pages/Usuarios';
import Clientes from './src/pages/Clientes';
import Login from './src/pages/Login';
import Produtos from './src/pages/Produtos';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Tabs() {
  return (

    <Tab.Navigator

      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? 'information-circle'
              : 'information-circle-outline';
          } else if (route.name === 'Usuarios') {
            iconName = focused ? 'person' : 'person';
          } else if (route.name === 'Clientes') {
            iconName = focused ? 'ios-person-circle' : 'ios-person-circle';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#3F64C7',
        inactiveTintColor: 'gray',
      }}

    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Usuarios" component={Usuarios} />
      <Tab.Screen name="Clientes" component={Clientes} />
    </Tab.Navigator>

  );
}



export default function Design() {



  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Home"
          component={Tabs}
          options= {{headerShown: false}}
        />
        <Stack.Screen 
        name="Usuarios" 
        component={Usuarios} 
        options={{
          title: 'Meu aplicativo',
          headerStyle: {
            backgroundColor: '#3F64C7',
          },
          headerTintColor: '#FFF'
        }}
        
        />
        <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
        <Stack.Screen name="Produtos" component={Produtos} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center'


  },
  texto: {
    fontSize: 25,
    color: '#F00'
  }

})