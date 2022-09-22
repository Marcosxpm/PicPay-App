import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import pixicon from '../../../assets/images/pixicon.png';
export default function Pix() {
  return (
    <View style={styles.container}>
      <Image source={pixicon} style={styles.images}/>
      <Text style={styles.text}>Pix</Text>
    </View>
  );
}


const styles = StyleSheet.create ({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#2D5E4B",
    height: 95,
    width: 85,
    position: 'relative',
    borderRadius: 8,
    marginLeft:10,
  },

  text: {
    color: '#fff',
    flex: 1,
    fontWeight: 'bold',
    right: 20,
    top: 20,
  },

  images: {
    marginTop: 4,
    marginBottom: 4,
    right: 20,
    top: 13,
    height: 30,
    width: 30,
  },
});