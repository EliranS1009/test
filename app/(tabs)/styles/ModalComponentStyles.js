import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
modalContainer: {
    flex: 1,
    justifyContent: 'center', // Center the modal content vertically
    alignItems: 'center', // Center the modal content horizontally
    backgroundColor: 'rgba(0, 0, 0, 0.7)', // Semi-transparent background
  },
  modalContent: {
    width: '50%', 
    backgroundColor: '#cccccc',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center', 
  },
  closeButton: {
    backgroundColor: "#ff0000",
    paddingVertical: 12,
    borderRadius: 5,
    marginTop: 20,
  }
});

export default styles;