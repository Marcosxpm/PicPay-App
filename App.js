import React from "react";
import App from './src';
import Routes from './src/screens/NavigationScreens';
import { NavigationContainer } from "@react-navigation/native"



export default function Main() {
  return (
   <NavigationContainer>
    <Routes/>
   </NavigationContainer>
  );
}