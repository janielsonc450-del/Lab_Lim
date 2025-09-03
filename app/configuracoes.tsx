import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function configuracoes() {
  return (
    <View style={styles.container}>
    <TouchableOpacity style={styles.button}>
        </TouchableOpacity> 
        <Text style={styles.text}>ddddddd</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 15,
    fontWeight: 'bold',
    position:'absolute',
   left:80,
   right:0,
  },
  button:{ 
   backgroundColor: '#e2dcdcff',
   width: 50,
   height: 50,
   borderRadius: 70,
   position:'absolute',
   left:20,


    
   
  }});
