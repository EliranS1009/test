// src/components/Card.js
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from '../styles/CardPageStyles';

const Card = ({ card, onEditPress }) => {
  return (
    <View key={card.id} style={styles.card}>
      <View style={styles.cardHeader}>
        <TouchableOpacity onPress={() => onEditPress(card.id)}>
          <Ionicons name="pencil" size={20} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.cardTitle}>{card.title}</Text>
      </View>
      <Text style={styles.cardDescription}>{card.description}</Text>
    </View>
  );
};

export default Card;
