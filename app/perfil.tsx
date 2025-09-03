import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Perfil() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Icon name="person" size={50} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#ffffffff',
  },
  button: {
    padding: 10,
    backgroundColor: '#007bff',
    borderRadius: 70,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    width: 140,
    height: 140,
    
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
});
