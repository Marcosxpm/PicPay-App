import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {Feather, Entypo} from '@expo/vector-icons';
import Home from './screens/Home';
import Pay from "./screens/New";
import Notification from "./screens/Notification";
import Store from "./screens/Store";
import Wallet from "./screens/Wallet";
import BottonPay from "./components/BottonNew";

const Tab = createBottomTabNavigator();

export default function Navigation() {
    return (
        <Tab.Navigator screenOptions={{
            tabBarStyle: {
              backgroundColor: '#fff',
            },
            tabBarActiveTintColor: 'green',
            headerShown: false,
            headerTransparent: false,
          }}>
            
            <Tab.Screen name="Inicio" component={Home} options={{
              tabBarIcon: ({color, size, focused}) => {
                if (focused) {
                  return <Feather name='home' size={size} color={color}/>
                }
                return <Feather name='home' size={size} color='gray'/>
              }
            }} />
    
            
            <Tab.Screen name="Carteira" component={Wallet}
            options={{
              tabBarIcon: ({color, size, focused}) => {
                if (focused) {
                  return <Entypo name='wallet' size={size} color={color}/>
                }
                return <Entypo name='wallet' size={size} color='gray'/>
              }
            }}/>
    
            <Tab.Screen name="Pagar" component={Pay} options={{
             tabBarIcon: ({color, size}) => (<BottonPay name='dollar-sign' size={size} color={color}/>)
          }}/>
    
            <Tab.Screen name="Notificações" component={Notification}
            options={{
              tabBarIcon: ({color, size, focused}) => {
                if (focused) {
                  return <Feather name='bell' size={size} color={color}/>
                }
                return <Feather name='bell' size={size} color='gray'/>
              }
            }}/>
    
            
            <Tab.Screen name="Store" component={Store}
            options={{
              tabBarIcon: ({color, size, focused}) => {
                if (focused) {
                  return <Feather name='shopping-bag' size={size} color={color}/>
                }
                return <Feather name='shopping-bag' size={size} color='gray'/>
              }
            }}/>
          </Tab.Navigator>
    )
}