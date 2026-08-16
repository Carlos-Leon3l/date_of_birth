import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ResultCard({ result }) {
  if (!result) return null;

  return (
    <View style={styles.card}>
      <View>
        <Text style={styles.categoryText}>{result.category}</Text>
      </View>
      
      <Text style={styles.resultTitle}>Idade Exata:</Text>
      
      <View style={styles.ageContainer}>
        <View style={styles.ageBox}>
          <Text style={styles.ageNumber}>{result.anosIdade}</Text>
          <Text style={styles.ageLabel}>Anos</Text>
        </View>
        <View style={styles.ageBox}>
          <Text style={styles.ageNumber}>{result.mesesIdade}</Text>
          <Text style={styles.ageLabel}>Meses</Text>
        </View>
        <View style={styles.ageBox}>
          <Text style={styles.ageNumber}>{result.diasIdade}</Text>
          <Text style={styles.ageLabel}>Dias</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFF',
    borderRadius: 15,
    padding: 20,
    marginTop: 30,
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  
  categoryText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
    textTransform: 'uppercase',
  },
  resultTitle: {
    fontSize: 18,
    color: '#333',
    marginBottom: 15,
    fontWeight: '600',
  },
  ageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  ageBox: {
    alignItems: 'center',
    flex: 1,
  },
  ageNumber: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#00796B',
  },
  ageLabel: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
});