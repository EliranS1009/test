// src/components/AddCardButton.js
import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from '../styles/AddCardButtonPageStyles';

const AddCardButton = ({ onPress }) => {

  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>הוסף תרגיל</Text>
    </TouchableOpacity>
  );
};

export default AddCardButton;
