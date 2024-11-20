// src/components/ModalComponent.js
import React from 'react';
import { Modal, View, Text, TouchableOpacity, TextInput } from 'react-native';
import styles from '../styles/ModalComponentStyles';

const ModalComponent = ({ visible, onClose,modatTitle, modalText,changeText }) => {
  return (
    <Modal animationType='none' transparent={true} visible={visible} onRequestClose={onClose}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <TextInput placeholder={modatTitle}  value={changeText}/>
          <TextInput placeholder={modalText} />
          <TouchableOpacity onPress={onClose}>
            <Text style={styles.closeButton}>סגור ושמור</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default ModalComponent;
