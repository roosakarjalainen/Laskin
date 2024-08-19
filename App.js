import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  const [ekaNumero, setEkaNumero] = useState('');
  const [tokaNumero, setTokaNumero] = useState('');
  const [tulos, setTulos] = useState(null);

  const handleSumma = () => {
    const sum = parseFloat(ekaNumero) + parseFloat(tokaNumero);
    setTulos(sum);
  };

  const handleVahennys = () => {
    const difference = parseFloat(ekaNumero) - parseFloat(tokaNumero);
    setTulos(difference);
  };

  return (
    <View style={styles.container}>
      {tulos !== null && (
        <Text style={styles.tulos}>Result: {tulos}</Text>
      )}
      <TextInput
        style={styles.input}
        placeholder="Type a number"
        keyboardType="numeric"
        value={ekaNumero}
        onChangeText={setEkaNumero}
      />
      <TextInput
        style={styles.input}
        placeholder="Type a number"
        keyboardType="numeric"
        value={tokaNumero}
        onChangeText={setTokaNumero}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleSumma}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleVahennys}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
        </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    fontSize: 26,
    width: '80%',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 12,
    width: '60%',
  },
  button: {
    backgroundColor: '#4da6ff',
    padding: 10,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginHorizontal: 10
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
  },
  tulos: {
    fontSize: 30,         
    fontWeight: 'bold',   
    textAlign: 'center',
    marginBottom: 24, 
  },
});
