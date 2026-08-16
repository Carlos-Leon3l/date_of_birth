import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import Header from './header';
import ResultCard from './resultCard';
import { calculateAge } from '../utils/ageCalculator';

export default function HomeScreen() {
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [result, setResult] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const handleDateChange = (text) => {
    let numericValue = text.replace(/\D/g, ''); 
    let formattedDate = numericValue;

    if (numericValue.length > 2) {
      formattedDate = numericValue.slice(0, 2) + '/' + numericValue.slice(2);
    }
    if (numericValue.length > 4) {
      formattedDate = formattedDate.slice(0, 5) + '/' + numericValue.slice(4, 8);
    }
    setDateOfBirth(formattedDate);
  };

  const handleCalculate = () => {
    setErrorMessage(''); 
    
    if (dateOfBirth.length !== 10) {
      setErrorMessage('Por favor, digite uma data completa (DD/MM/AAAA).');
      setResult(null); 
      return;
    }

    const ageData = calculateAge(dateOfBirth);
    
    if (!ageData) {
      setErrorMessage('A data inserida não é válida ou está no futuro.');
      setResult(null);
    } else {
      setResult(ageData); 
    }
  };

  return (
    <View style={styles.container}>
      <Header />
      
      <View style={styles.content}>
        <Text style={styles.label}>Data de Nascimento do Paciente</Text>
        <TextInput
          style={styles.input}
          placeholder="DD/MM/AAAA"
          keyboardType="numeric"
          maxLength={10}
          value={dateOfBirth}
          onChangeText={handleDateChange}
        />

        {errorMessage !== '' && (
          <Text style={styles.errorText}>{errorMessage}</Text>
        )}

        <View style={styles.button}>
          <Button 
            title="Calcular Idade e Classificar" 
            onPress={handleCalculate} 
            color="#00796B" 
          />
        </View>

        <ResultCard result={result} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FA', 
  },
  content: {
    paddingHorizontal: 20,
  },
  label: {
    fontSize: 16,
    color: '#333',
    marginBottom: 8,
    fontWeight: '500',
  },
  input: {
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    padding: 15,
    fontSize: 18,
    marginBottom: 10, 
    textAlign: 'center',
    letterSpacing: 2,
  },
  errorText: {
    color: 'red',
    fontSize: 14,
    marginBottom: 10,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  button: {
    marginBottom: 20,
  }
});
